resource "cloudflare_pages_project" "portfolio" {
  account_id        = var.cloudflare_account_id
  name              = "cturner-portfolio"
  production_branch = "main"
  build_config {
    build_command   = "yarn build"
    destination_dir = "out"
  }

  source {
    type = "github"
    config {
      owner                         = "cturner8"
      repo_name                     = "cturner8.github.io"
      production_branch             = "main"
      pr_comments_enabled           = true
      deployments_enabled           = true
      production_deployment_enabled = true
      preview_deployment_setting    = "custom"
      preview_branch_includes       = ["dev", "preview"]
      preview_branch_excludes       = ["main", "prod"]
    }
  }
}
