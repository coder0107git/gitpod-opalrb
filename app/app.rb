require 'opal'
require 'native'
require 'promise'
require 'browser/setup/full'
# TODO: See why Opal doesn't work with require_relative
require './app/console.rb'

include ConsoleWrapper


$document.body << "Hello world!"
$console.log "Hello from Ruby!"
