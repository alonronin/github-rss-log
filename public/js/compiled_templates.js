(function(){dust.register("item",body_0);function body_0(chk,ctx){return chk.write("<li><blockquote><p style=\"margin-bottom: 20px;\"><b>").reference(ctx.get("title"),ctx,"h").write("</b></p><p><img class=\"img-polaroid pull-left\" style=\"margin-right: 10px\" src=\"").reference(ctx.get("thumbnail"),ctx,"h").write("\" alt=\"").reference(ctx.getPath(false,["author","name"]),ctx,"h").write("\" width=\"30\" height=\"30\" /><small class=\"pull-left\">").reference(ctx.get("updated"),ctx,"h").write(" <br>by <a href=\"").reference(ctx.getPath(false,["author","uri"]),ctx,"h").write("\" target=\"_blank\">").reference(ctx.getPath(false,["author","name"]),ctx,"h").write("</a></small></p><div class=\"clearfix\"></div></blockquote>").reference(ctx.get("content"),ctx,"h",["s"]).write("<p><a href=\"").reference(ctx.get("link"),ctx,"h").write("\" target=\"_blank\"><i class=\"icon-tag\"></i> view commit</a> <code>").reference(ctx.get("id"),ctx,"h").write("</code></p><hr></li>");}return body_0;})();