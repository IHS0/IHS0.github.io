jQuery(document).ready(function($){$('.widget_team-matches').each(function(){var cookiename='wp-'+$(this).attr('id')+'-tabs',tabs=$(this).find('.tabs'),initial_tab=$.cookie(cookiename);tabs.find('a').bind('click',function(evt){var c=$(this).attr('href').substr(1),show='.'+c,l=tabs.parent().parent();tabs.find('li').removeClass('selected');$(this).parent().addClass('selected');if(c=='all'){show='.teamwar-item';}
    l.find('.teamwar-item').hide().end().find(show).show().end().find(show+':odd').addClass('alt').end().find(show+':even').removeClass('alt').end();$.cookie(cookiename,c,{expires:365,path:'/'});return false;});if(initial_tab){tabs.find('a[href$='+initial_tab+']').click();}});});