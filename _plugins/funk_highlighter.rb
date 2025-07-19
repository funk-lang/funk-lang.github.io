require 'rouge'

module Jekyll
  module Tags
    class HighlightBlock < Liquid::Block
      def initialize(tag_name, markup, tokens)
        super
        if @lang && @lang.strip == 'funk'
          @lang = 'haskell'
        end
      end
    end
  end
end

# Register custom lexer alias
Rouge::Lexer.tag_alias 'funk', 'haskell'
