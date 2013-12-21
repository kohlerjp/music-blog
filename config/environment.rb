# Load the Rails application.
require File.expand_path('../application', __FILE__)

# Initialize the Rails application.
MusicBlog::Application.initialize!

APP_CONFIG = YAML.load_file("config/config.yml")