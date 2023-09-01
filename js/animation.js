$(function(){
  var typingBool = false; 
        var typingIdx=0; 
        var liIndex = 0;
        var liLength = $(".typing_txt>p").length;
        var typingTxt = $(".typing_txt>p").eq(liIndex).text(); 
        typingTxt=typingTxt.split(""); 
        if(typingBool==false){ 
            typingBool=true; 
            var tyInt = setInterval(typing,300); 
        } 
        function typing(){ 
          $(".typing p").removeClass("on");
          $(".typing p").eq(liIndex).addClass("on");
          if(typingIdx<typingTxt.length){ 
            $(".typing p").eq(liIndex).append(typingTxt[typingIdx]); 
            typingIdx++; 
          } else{ if(liIndex<liLength-1){
                liIndex++; 
                typingIdx=0;
                typingBool = false; 
                typingTxt = $(".typing_txt>p").eq(liIndex).text(); 
                clearInterval(tyInt);
                setTimeout(function(){
                  tyInt = setInterval(typing,200);
                },200);
                } else if(liIndex==liLength-1){
                  clearInterval(tyInt);
                }
            } 
        }

        gsap.registerPlugin(ScrollTrigger);

        $(".flow_banner_left_inner").each(function() {
            ScrollTrigger.create({
            trigger: ".flow_banner_left_inner",
            toggleActions: "restart none reverse none",
            start: "top center",
            onEnter: () => $(this).addClass('active'),
            onLeave: () => $(this).removeClass('active'),
            onEnterBack: () => $(this).addClass('active'),
            onLeaveBack: () => $(this).removeClass('active'),
          });
        });
  
        $(".flow_banner_right_inner").each(function() {
            ScrollTrigger.create({
            trigger: ".flow_banner_right_inner",
            toggleActions: "restart none reverse none",
            start: "top center",
            onEnter: () => $(this).addClass('active'),
            onLeave: () => $(this).removeClass('active'),
            onEnterBack: () => $(this).addClass('active'),
            onLeaveBack: () => $(this).removeClass('active'),
          });
        });

        $(".flow_pen_inner").each(function() {
            ScrollTrigger.create({
            trigger: ".flow_banner_right_inner",
            toggleActions: "restart none reverse none",
            start: "top center",
            onEnter: () => $(this).addClass('active'),
            onLeave: () => $(this).removeClass('active'),
            onEnterBack: () => $(this).addClass('active'),
            onLeaveBack: () => $(this).removeClass('active'),
          });
        });

        $(".color_pen_list").each(function() {
          ScrollTrigger.create({
          trigger: ".color_system",
          toggleActions: "restart none reverse none",
          start: "top center",
          start: "top 80%",
          onEnter: () => $(this).addClass('active'),
          onLeave: () => $(this).removeClass('active'),
          onEnterBack: () => $(this).addClass('active'),
          onLeaveBack: () => $(this).removeClass('active'),
        });
      });

        $(".system_list_content").each(function() {
          ScrollTrigger.create({
          trigger: ".system_list",
          toggleActions: "restart none reverse none",
          start: "top center",
          start: "top 80%",
          onEnter: () => $(this).addClass('active'),
          onLeave: () => $(this).removeClass('active'),
          onEnterBack: () => $(this).addClass('active'),
          onLeaveBack: () => $(this).removeClass('active'),
        });
      });
      
        $(".customizing_title").each(function() {
          ScrollTrigger.create({
          trigger: ".customizing_title",
          toggleActions: "restart none reverse none",
          start: "top 80%",
          onEnter: () => $(this).addClass('active'),
          onLeave: () => $(this).removeClass('active'),
          onEnterBack: () => $(this).addClass('active'),
          onLeaveBack: () => $(this).removeClass('active'),
        });
      });

      gsap.fromTo(".customizing_img_active",{
        rotate: 0, x: 0, y: '5%',
      },{
        scrollTrigger: {
          trigger: ".customizing_img_active",
          toggleActions: "restart none reverse none",
          start: "top center",
          end: "top center",
        },
        rotate: -15, x: '-75%', y: '10%',
      });

      $(".system_title").each(function() {
          ScrollTrigger.create({
          trigger: ".system",
          toggleActions: "restart none reverse none",
          start: "top center",
          onEnter: () => $(this).addClass('active'),
          onLeave: () => $(this).removeClass('active'),
          onEnterBack: () => $(this).addClass('active'),
          onLeaveBack: () => $(this).removeClass('active'),
        });
      });

      $(".system_img").each(function() {
          ScrollTrigger.create({
          trigger: ".system",
          toggleActions: "restart none reverse none",
          start: "top center",
          onEnter: () => $(this).addClass('active'),
          onLeave: () => $(this).removeClass('active'),
          onEnterBack: () => $(this).addClass('active'),
          onLeaveBack: () => $(this).removeClass('active'),
        });
      });

      $(".asset_slide_title").each(function() {
          ScrollTrigger.create({
          trigger: ".asset_slide_content",
          toggleActions: "restart none reverse none",
          start: "top center",
          start: "top 80%",
          onEnter: () => $(this).addClass('active'),
          onLeave: () => $(this).removeClass('active'),
          onEnterBack: () => $(this).addClass('active'),
          onLeaveBack: () => $(this).removeClass('active'),
        });
      });

      $(".work_title").each(function() {
          ScrollTrigger.create({
          trigger: ".work_title",
          toggleActions: "restart none reverse none",
          start: "top center",
          start: "top 80%",
          onEnter: () => $(this).addClass('active'),
          onLeave: () => $(this).removeClass('active'),
          onEnterBack: () => $(this).addClass('active'),
          onLeaveBack: () => $(this).removeClass('active'),
        });
      });

      $(".work_banner").each(function() {
          ScrollTrigger.create({
          trigger: ".work_banner",
          toggleActions: "restart none reverse none",
          start: "top center",
          start: "top 80%",
          onEnter: () => $(this).addClass('active'),
          onLeave: () => $(this).removeClass('active'),
          onEnterBack: () => $(this).addClass('active'),
          onLeaveBack: () => $(this).removeClass('active'),
        });
      });

      $(".work_list_title").each(function() {
            ScrollTrigger.create({
            trigger: ".work_list_content",
            toggleActions: "restart none reverse none",
            start: "top center",
            start: "top 80%",
            onEnter: () => $(this).addClass('active'),
            onLeave: () => $(this).removeClass('active'),
            onEnterBack: () => $(this).addClass('active'),
            onLeaveBack: () => $(this).removeClass('active'),
          });
        });

        $(".work_logo").each(function() {
          ScrollTrigger.create({
          trigger: ".nike_fin",
          toggleActions: "restart none reverse none",
          start: "top center",
          start: "top 80%",
          onEnter: () => $(this).addClass('active'),
          onLeave: () => $(this).removeClass('active'),
          onEnterBack: () => $(this).addClass('active'),
          onLeaveBack: () => $(this).removeClass('active'),
        });
      });

        $(".work_icon_inner").each(function() {
          ScrollTrigger.create({
          trigger: ".nike_fin",
          toggleActions: "restart none reverse none",
          start: "top 70%",
          onEnter: () => $(this).addClass('active'),
          onLeave: () => $(this).removeClass('active'),
          onEnterBack: () => $(this).addClass('active'),
          onLeaveBack: () => $(this).removeClass('active'),
        });
      });

        gsap.to(".asset_icon01", {
          scrollTrigger: {
            trigger: ".asset_icon01",
            toggleActions: "restart none reverse none",
            start: "top center",
            end: "top center",
          },
          y: -100, duration: .5, opacity: 1,
        });

        gsap.to(".asset_icon02", {
          scrollTrigger: {
            trigger: ".asset_icon02",
            toggleActions: "restart none reverse none",
            start: "top center",
            end: "top center",
          },
          y: -100, duration: .5, opacity: 1,
        });

        gsap.to(".asset_icon03", {
          scrollTrigger: {
            trigger: ".asset_icon03",
            toggleActions: "restart none reverse none",
            start: "top center",
            end: "top center",
          },
          y: -100, duration: .5, opacity: 1,
        });

        gsap.to(".asset_icon04", {
          scrollTrigger: {
            trigger: ".asset_icon04",
            toggleActions: "restart none reverse none",
            start: "top center",
            end: "top center",
          },
          y: -100, duration: .5, opacity: 1,
        });

        gsap.to(".asset_icon05", {
          scrollTrigger: {
            trigger: ".asset_icon05",
            toggleActions: "restart none reverse none",
            start: "top center",
            end: "top center",
          },
          y: -100, duration: .5, opacity: 1,
        });

        gsap.fromTo(".nike_line_top",{
          x: 2000, y: 400,
        },{
          scrollTrigger: {
            trigger: ".nike_line_top",
            toggleActions: "restart none reverse none",
            start: "top bottom",
            end: "top bottom",
          },
          x : 0, y: 0, duration: 1, opacity: 1,
        });

        gsap.fromTo(".nike_line_bottom",{
          x: 2000, y: -500,
        },{
          scrollTrigger: {
            trigger: ".nike_line_bottom",
            toggleActions: "restart none reverse none",
            start: "center center",
            end: "center center",
          },
          x : 0, y: 0, duration: 1, opacity: 1,
        });

        //------------ 모바일만 -----------//

          $(".system_img_mb").each(function() {
            ScrollTrigger.create({
            trigger: ".system_img_mb",
            toggleActions: "restart none reverse none",
            start: "top center",
            onEnter: () => $(this).addClass('active'),
            onLeave: () => $(this).removeClass('active'),
            onEnterBack: () => $(this).addClass('active'),
            onLeaveBack: () => $(this).removeClass('active'),
          });
        });

        $(".work_banner_mb").each(function() {
          ScrollTrigger.create({
          trigger: ".work_banner_mb",
          toggleActions: "restart none reverse none",
          start: "top center",
          start: "top 80%",
          onEnter: () => $(this).addClass('active'),
          onLeave: () => $(this).removeClass('active'),
          onEnterBack: () => $(this).addClass('active'),
          onLeaveBack: () => $(this).removeClass('active'),
        });
      });

        $(".work_left").each(function() {
          ScrollTrigger.create({
          trigger: ".work_list_box",
          toggleActions: "restart none reverse none",
          start: "top center",
          start: "top 80%",
          onEnter: () => $(this).addClass('active'),
          onLeave: () => $(this).removeClass('active'),
          onEnterBack: () => $(this).addClass('active'),
          onLeaveBack: () => $(this).removeClass('active'),
        });
      });

        $(".work_right").each(function() {
          ScrollTrigger.create({
          trigger: ".work_right",
          toggleActions: "restart none reverse none",
          start: "top center",
          start: "top 80%",
          onEnter: () => $(this).addClass('active'),
          onLeave: () => $(this).removeClass('active'),
          onEnterBack: () => $(this).addClass('active'),
          onLeaveBack: () => $(this).removeClass('active'),
        });
      });

      gsap.fromTo(".nike_line_top_mb",{
        x: 2000, y: 500,
      },{
        scrollTrigger: {
          trigger: ".work_banner_mb",
          toggleActions: "restart none reverse none",
          start: "center bottom",
          end: "center bottom",
        },
        x : 0, y: 0, duration: 1,
      });

      gsap.fromTo(".nike_line_bottom_mb",{
        x: 2000, y: -1000,
      },{
        scrollTrigger: {
          trigger: ".nike_line_bottom_mb",
          toggleActions: "restart none reverse none",
          start: "bottom top",
          end: "top top",
        },
        x : 0, y: 0, duration: 1,
      });
})
        
