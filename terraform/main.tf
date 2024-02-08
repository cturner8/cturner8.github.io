terraform {
  cloud {
    organization = "cturner"

    workspaces {
      name = "Portfolio"
    }
  }

  required_providers {
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 4.24"
    }
  }
}

provider "cloudflare" {
  api_token = var.cloudflare_api_token
}
