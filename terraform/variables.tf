variable "cloudflare_api_token" {
  type        = string
  sensitive   = true
  description = "Cloudflare API token"
}

variable "cloudflare_account_id" {
  type        = string
  sensitive   = true
  description = "Cloudflare account ID"
}
