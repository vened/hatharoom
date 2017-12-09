source 'https://rubygems.org'
git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end
ruby '2.4.1'
gem 'rails', '~> 5.1.4'
gem 'puma', '~> 3.7'
gem 'webpacker', '~> 3.0', '>= 3.0.2'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'coffee-rails', '~> 4.2'
gem 'turbolinks', '~> 5'
gem 'jbuilder', '~> 2.5'
group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'capybara', '~> 2.13'
  gem 'selenium-webdriver'
end
group :development do
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
gem 'devise'
gem 'devise-i18n'
gem 'high_voltage'
gem 'pg'
gem 'pundit'
group :development do
  gem 'better_errors'
  gem 'capistrano', '~> 3.0.1'
  gem 'capistrano-bundler'
  gem 'capistrano-rails', '~> 1.1.0'
  gem 'capistrano-rails-console'
  gem 'capistrano-rvm', '~> 0.1.1'
  gem 'foreman'
  gem 'rails_layout'
  gem 'spring-commands-rspec'
end
group :development, :test do
  gem 'factory_bot_rails'
  gem 'faker'
  gem 'pry-rails'
  gem 'pry-rescue'
  gem 'rspec-rails'
  gem 'rubocop'
end
group :test do
  gem 'database_cleaner'
  gem 'launchy'
end

# Added at 2017-12-07 23:01:28 +0300 by max:
gem "rails-i18n", "~> 5.0"

# Added at 2017-12-07 23:46:43 +0300 by max:
gem "bootstrap-sass", "~> 3.3"

# Added at 2017-12-07 23:51:04 +0300 by max:
gem "slim-rails", "~> 3.1"

# Added at 2017-12-07 23:58:49 +0300 by max:
gem "devise-bootstrap-views", "~> 0.0.11"

# Added at 2017-12-08 23:42:41 +0300 by max:
gem "active_model_serializers", "~> 0.10.7"
