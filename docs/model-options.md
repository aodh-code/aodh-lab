# Model Options

Aodh Lab is designed to be model-flexible.

The project should not depend on one model provider, one cloud service, or one local setup.

Different users should be able to choose the model path that fits their budget, privacy needs, technical comfort, and hardware.

## Model Choice Principle

Aodh Lab separates the agent system from the model provider.

The model is the reasoning engine.

The runtime, tools, memory files, and safety rules should remain understandable and reusable even if the user changes model provider later.

## Supported Model Paths

### Option 1: Free Cloud Route

Best for:

- Beginners
- Users without powerful local hardware
- People who want the fastest start
- Users who are comfortable sending prompts to a cloud provider

Possible providers:

- OpenRouter free models
- Other free-tier API providers

Benefits:

- Easy to start
- No local model setup
- Can access strong models quickly
- Useful for learning agent architecture before optimising locally

Trade-offs:

- Requires internet access
- Free models may change over time
- Rate limits may apply
- Prompts are sent to an external provider

### Option 2: Paid Cloud Route

Best for:

- Users who want stronger reliability
- Users building serious workflows
- Users who need better context windows, speed, or model quality

Possible providers:

- OpenAI
- Anthropic
- Google
- OpenRouter paid models
- Other compatible API providers

Benefits:

- Strong model performance
- Better reliability
- Easier setup than local models
- Good for production-style workflows

Trade-offs:

- Costs money
- Requires API keys
- External provider receives prompt data
- Provider terms and pricing may change

### Option 3: Free Local Route

Best for:

- Privacy-focused users
- Learners who want to understand local AI
- Users with Apple Silicon Macs or capable PCs
- Users who want to avoid API costs

Possible tools:

- Ollama
- LM Studio

Possible model families:

- Qwen
- DeepSeek
- Llama
- Gemma
- Mistral-style models
- Other open-weight models supported by local runtimes

Benefits:

- Can run without cloud API costs
- Better privacy for local notes
- Good for learning how models behave on personal hardware
- No dependency on one hosted provider

Trade-offs:

- Model quality depends on hardware
- Setup can be more technical
- Smaller models may reason less well
- Larger models may be slow or too heavy for some machines

### Option 4: Hybrid Route

Best for:

- Users who want privacy for simple tasks
- Users who want stronger cloud models for harder tasks
- People experimenting with model routing

Example pattern:

- Local model for simple summaries and note processing
- Cloud model for complex reasoning, coding, or long-context tasks

Benefits:

- Flexible
- Cost-aware
- Privacy-aware
- Lets the user compare model behaviour

Trade-offs:

- More configuration
- More moving parts
- Requires clear routing rules

## Suggested Starting Point

For most users, Aodh Lab should start with one simple model path.

Recommended beginner options:

1. OpenRouter free model route
2. Ollama local model route
3. LM Studio local model route

Users can switch later.

## Example Local Reference Machine

One example local setup is an Apple Silicon machine with 16 GB memory.

This means the local route should begin with smaller or mid-sized models before testing heavier models.

Recommended starting local model size:

- 3B to 8B for smooth early testing
- 14B only if performance is acceptable
- Larger models only after experimentation

## Provider Abstraction Rule

Aodh Lab should avoid hardcoding one provider into the core design.

Instead, model configuration should live in local configuration files.

Public repo files should provide:

- documentation
- templates
- examples
- setup guidance

Private local files should contain:

- selected provider
- model name
- API key references
- local runtime preferences

## Safety and Privacy Reminder

Cloud models are useful, but users should understand that prompts may be sent to an external service.

Local models are useful for privacy, but users should still avoid placing sensitive material into the lab unless they deliberately choose to do so.

Aodh Lab should make the model path visible and understandable to the user.