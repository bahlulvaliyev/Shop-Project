
$(document).ready(()=>{
  $(".showcase1").click(()=>{ 
    $(".showcase-big").attr("src", "../image/product_photo/81BxSLPKITL._UY695_.jpg");
    $(".showcase-big").attr("width","145px");
    $(".showcase-big").attr("heigh","275px");
  });
  $(".showcase2").click(()=>{ 
    $(".showcase-big").attr("src", "../image/product_photo/813MyjadwFL._UY500_.jpg");
    $(".showcase-big").attr("width","145px");
    $(".showcase-big").attr("heigh","275px");
  });
  $(".showcase3").click(()=>{ 
    $(".showcase-big").attr("src", "../image/product_photo/Big Product Img.png");
    $(".showcase-big").attr("width","145px");
    $(".showcase-big").attr("heigh","275px");
  });
  $(".twiceSection__dots").click(()=>{ 
    $(".extraProductHidden").slideDown();
  });
});
