# backtick_javascript: true

require 'console'

# 
#$_console = $console
#$console = nil

# Manipulate the browser console.
#
# @see https://developer.mozilla.org/en-US/docs/Web/API/console
module ConsoleWrapper
  $_console = $console

  class Console
    # Clear the console.
    def clear
      $_console.clear
    end

    # Print a stacktrace from the call site.
    def trace
      $_console.trace
    end

    # Log the passed objects based on an optional initial format.
    def log(*args)
      $_console.log("[Ruby]", *args)
    end

    # Log the passed objects based on an optional initial format as informational
    # log.
    def info(*args)
      $_console.info("[Ruby]", *args)
    end

    # Log the passed objects based on an optional initial format as warning.
    def warn(*args)
      $_console.warn("[Ruby]", *args)
    end

    # Log the passed objects based on an optional initial format as error.
    def error(*args)
      $_console.error("[Ruby]", *args)
    end

    # Time the given block with the given label.
    def time(label, &block)
      raise ArgumentError, 'no block given' unless block

      $_console.time(label, &block)
    end

    # Group the given block.
    def group(*args, &block)
      raise ArgumentError, 'no block given' unless block

      $_console.group(*args, &block)
    end

    # Group the given block but collapse it.
    def group!(*args, &block)
      return unless block_given?

      $_console.group(*args, &block)      
    end
  end

  $console = Console.new(`Opal.global.console`)

  def puts(*args)
    $console.log(*args)
  end
end
