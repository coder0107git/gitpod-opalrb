require 'bundler'
Bundler.require

Opal.append_path "./app/"
File.binwrite "./dist/index.js", Opal::Builder.build("app").to_s
