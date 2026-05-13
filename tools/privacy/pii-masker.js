/**
 * Aodh Lab PII Masker
 *
 * A small dependency-free JavaScript starter utility for masking obvious sensitive values
 * before sending text to a cloud model.
 *
 * This is not a complete security tool.
 * It is a basic privacy helper that can be improved over time.
 */

const DEFAULT_PATTERNS = [
  {
    type: "EMAIL",
    regex: /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi,
  },
  {
    type: "URL",
    regex: /\bhttps?:\/\/[^\s<>"\')]*[A-Za-z0-9/#]/gi,
  },
  {
    type: "PHONE",
    regex: /(?:\+?\d{1,3}[\s.-]?)?(?:\(?\d{2,4}\)?[\s.-]?){2,5}\d{2,4}/g,
  },
  {
    type: "SECRET",
    regex: /\b(?:sk|pk|api|key|token|secret)[A-Za-z0-9_\-]{12,}\b/g,
  },
];

function maskText(input, patterns = DEFAULT_PATTERNS) {
  if (typeof input !== "string") {
    throw new TypeError("maskText expected a string input.");
  }

  let masked = input;
  const map = {};
  const counters = {};

  for (const pattern of patterns) {
    counters[pattern.type] = counters[pattern.type] || 0;

    masked = masked.replace(pattern.regex, (match) => {
      const existingToken = Object.keys(map).find((token) => map[token] === match);

      if (existingToken) {
        return existingToken;
      }

      counters[pattern.type] += 1;
      const token = `[${pattern.type}_${counters[pattern.type]}]`;
      map[token] = match;
      return token;
    });
  }

  return {
    masked,
    map,
  };
}

function rehydrateText(input, map) {
  if (typeof input !== "string") {
    throw new TypeError("rehydrateText expected a string input.");
  }

  if (!map || typeof map !== "object") {
    throw new TypeError("rehydrateText expected a map object.");
  }

  let output = input;

  for (const [token, value] of Object.entries(map)) {
    output = output.split(token).join(value);
  }

  return output;
}

function redactText(input, patterns = DEFAULT_PATTERNS) {
  const result = maskText(input, patterns);
  let redacted = result.masked;

  for (const token of Object.keys(result.map)) {
    const label = token.replace(/_\d+\]$/, "]");
    redacted = redacted.split(token).join(label);
  }

  return redacted;
}

if (require.main === module) {
  const mode = process.argv[2];
  const text = process.argv.slice(3).join(" ");

  if (!mode || !text) {
    console.log("Usage:");
    console.log('  node tools/privacy/pii-masker.js mask "Text with email@example.com"');
    console.log('  node tools/privacy/pii-masker.js redact "Text with email@example.com"');
    process.exit(1);
  }

  if (mode === "mask") {
    console.log(JSON.stringify(maskText(text), null, 2));
  } else if (mode === "redact") {
    console.log(redactText(text));
  } else {
    console.error(`Unknown mode: ${mode}`);
    process.exit(1);
  }
}

module.exports = {
  maskText,
  rehydrateText,
  redactText,
  DEFAULT_PATTERNS,
};
