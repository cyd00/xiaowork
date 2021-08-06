var file=document.getElementById("file");
var list1=document.getElementById("list1");
var span=document.getElementById("span");
var star=document.getElementById("star");
var ju=document.getElementById("ju");
var ca=document.getElementById("ca");
var rec=document.getElementById("rec");
var sleft=document.getElementById("sleft");
var xleft=document.getElementById("xleft");
var huaju=document.getElementById("huaju");
var huayuan=document.getElementById("huayuan");

var pen=document.getElementById("pen");

var head=document.getElementsByClassName("head")[0];
var left=document.getElementsByClassName("left")[0];
var one=document.getElementsByClassName("one")[0];
var two=document.getElementsByClassName("two")[0];

list1.style.display="none";

file.onmouseover=function(){
    list1.style.display="block"
    list1.style.backgroundColor="white";
    // file.style.position="absolute";
    // left.style.position="relative";
    // one.style.zIndex="-1";
}
file.onmouseout=function(){
    list1.style.display="none";
    // file.style.width="50px";
    list1.style.height="90px";
    // file.style.backgroundColor="grey";
    // span.style.backgroundColor="lightgrey";
    list1.style.display="none";
    

}
var jclick=true;
ju.onclick=function(){
    
    if(jclick){
        ju.style.backgroundColor="rgb(240, 237, 237)";
        ju.style.boxShadow=" 1.5px -1.5px  1.5px  rgb(26, 25, 25)";
        // console.log(f)
        jclick=false;
    }
    else if(jclick==false){
        ju.style.backgroundColor="lightgrey";
        ju.style.boxShadow="1.5px 1.5px 1.5px rgb(31 30 30)";
        jclick=true;
    }

}
var sclick=true;
star.onclick=function(){
    
    if(sclick){
        star.style.backgroundColor="rgb(240, 237, 237)";
        star.style.boxShadow=" 1.5px -1.5px  1.5px  rgb(26, 25, 25)";
        // console.log(f)
        sclick=false;
    }
    else if(sclick==false){
        star.style.backgroundColor="lightgrey";
        star.style.boxShadow="1.5px 1.5px 1.5px rgb(31 30 30)";
        sclick=true;
    }
}

var cclick=true;
ca.onclick=function(){
    
    if(cclick){
        ca.style.backgroundColor="rgb(240, 237, 237)";
        ca.style.boxShadow=" 1.5px -1.5px  1.5px  rgb(26, 25, 25)";
        // console.log(f)
        cclick=false;
    }
    else if(cclick==false){
        ca.style.backgroundColor="lightgrey";
        ca.style.boxShadow="1.5px 1.5px 1.5px rgb(31 30 30)";
        cclick=true;
    }
    clearCanvas();
}

function clearCanvas()  
{  
    var c=document.getElementById("canvas");  
    var cxt=c.getContext("2d");  
    cxt.clearRect(0,0,c.width,c.height);  
} 

var pclick=true;
pen.onclick=function(){
    
    if(pclick){
        pen.style.backgroundColor="rgb(240, 237, 237)";
        pen.style.boxShadow=" 1.5px -1.5px  1.5px  rgb(26, 25, 25)";
        // console.log(f)
        pclick=false;

        let context = canvas.getContext('2d');

        canvas.loadImage = function () {
            let self = this;
            let img = new Image();
            img.src = self.lastImage;  // 将最后保存的图片赋值给img
            context.drawImage(img, 0, 0, canvas.width, canvas.height);  // 将img展示在canvas中
        }
        
        canvas.initCanvas = function () {
            context.clearRect(0, 0, canvas.width, canvas.height);  // 清空canvas
            canvas.loadImage();  // 将最近的图片展示到canvas中
        }
    
        canvas.onmousedown = function mouseDownAction(e) {
            let self = this;
            self.X1 = e.offsetX;  // 鼠标按下时保存当前位置，为起始位置
            self.Y1 = e.offsetY;
            self.isMouseDown = true;  // 将按下的flag表示为true，拖动鼠标时使用
            self.loadImage();
        };
        
        canvas.onmousemove = function mouseMoveAction(e) {
            let self = this;
            if (self.isMouseDown) {
                self.X2 = e.offsetX;
                self.Y2 = e.offsetY;
                self.drawing(self.X1, self.Y1, self.X2, self.Y2, e);
            }
        };
        
        canvas.onmouseup = function mouseUpAction(e) {
            let self = this;
            self.lastImage = canvas.toDataURL('image/png');
            self.isMouseDown = false;
        };
    
        canvas.drawing = function (x1, y1, x2, y2, e) {
            let self = this;
            if (!context) {
                return;
            } else {
                // 设置画笔的颜色和大小
                context.fillStyle = "red";  // 填充颜色为红色
                context.strokeStyle = "black";  // 画笔的颜色
                context.lineWidth = 5;  // 指定描边线的宽度
        
                context.save();
                context.beginPath();
        
                // 画笔需要保留之前的移动轨迹，所以不需要初始化清除。
                context.moveTo(x1, y1);
                context.lineTo(x2, y2);
                context.stroke();
        
                // 画笔功能，需要动态实时将当前位置赋给初始位置，以实现连续笔记，否则就是直线。
                self.X1 = self.X2;
                self.Y1 = self.Y2;
        
                context.restore();
                context.closePath();
            }
        }
    }
    else if(pclick==false){
        pen.style.backgroundColor="lightgrey";
        pen.style.boxShadow="1.5px 1.5px 1.5px rgb(31 30 30)";
        pclick=true;
        let context = canvas.getContext('2d');

        canvas.loadImage = function () {
            let self = this;
            let img = new Image();
            img.src = self.lastImage;  // 将最后保存的图片赋值给img
            context.drawImage(img, 0, 0, canvas.width, canvas.height);  // 将img展示在canvas中
        }
        
        canvas.initCanvas = function () {
            context.clearRect(0, 0, canvas.width, canvas.height);  // 清空canvas
            canvas.loadImage();  // 将最近的图片展示到canvas中
        }
    
        canvas.onmousedown = function mouseDownAction(e) {
            let self = this;
            self.X1 = e.offsetX;  // 鼠标按下时保存当前位置，为起始位置
            self.Y1 = e.offsetY;
            self.isMouseDown = true;  // 将按下的flag表示为true，拖动鼠标时使用
            self.loadImage();
        };
        
        canvas.onmousemove = function mouseMoveAction(e) {
            let self = this;
            if (self.isMouseDown) {
                self.X2 = e.offsetX;
                self.Y2 = e.offsetY;
                self.drawing(self.X1, self.Y1, self.X2, self.Y2, e);
            }
        };
        
        canvas.onmouseup = function mouseUpAction(e) {
            let self = this;
            self.lastImage = canvas.toDataURL('image/png');
            self.isMouseDown = false;
        };
    
        canvas.drawing = function (x1, y1, x2, y2, e) {
            let self = this;
            if (!context) {
                return;
            } else {
                // 设置画笔的颜色和大小
                context.fillStyle = "red";  // 填充颜色为红色
                context.strokeStyle = "rgba(0,0,0,0)";  // 画笔的颜色
                context.lineWidth = 5;  // 指定描边线的宽度
        
                context.save();
                context.beginPath();
        
                // 画笔需要保留之前的移动轨迹，所以不需要初始化清除。
                context.moveTo(x1, y1);
                context.lineTo(x2, y2);
                context.stroke();
        
                // 画笔功能，需要动态实时将当前位置赋给初始位置，以实现连续笔记，否则就是直线。
                self.X1 = self.X2;
                self.Y1 = self.Y2;
        
                context.restore();
                context.closePath();
            }
        }
    }

}

sleft.onclick=function(){
    let context = canvas.getContext('2d');

        canvas.loadImage = function () {
            let self = this;
            let img = new Image();
            img.src = self.lastImage;  // 将最后保存的图片赋值给img
            context.drawImage(img, 0, 0, canvas.width, canvas.height);  // 将img展示在canvas中
        }
        
        canvas.initCanvas = function () {
            context.clearRect(0, 0, canvas.width, canvas.height);  // 清空canvas
            canvas.loadImage();  // 将最近的图片展示到canvas中
        }
    
        canvas.onmousedown = function mouseDownAction(e) {
            let self = this;
            self.X1 = e.offsetX;  // 鼠标按下时保存当前位置，为起始位置
            self.Y1 = e.offsetY;
            self.isMouseDown = true;  // 将按下的flag表示为true，拖动鼠标时使用
            self.loadImage();
        };
        
        canvas.onmousemove = function mouseMoveAction(e) {
            let self = this;
            if (self.isMouseDown) {
                self.X2 = e.offsetX;
                self.Y2 = e.offsetY;
                self.drawing(self.X1, self.Y1, self.X2, self.Y2, e);
            }
        };
        
        canvas.onmouseup = function mouseUpAction(e) {
            let self = this;
            self.lastImage = canvas.toDataURL('image/png');
            self.isMouseDown = false;
        };
    
        canvas.drawing = function (x1, y1, x2, y2, e) {
            let self = this;
            if (!context) {
                return;
            } else {
                // 设置画笔的颜色和大小
                context.fillStyle = "red";  // 填充颜色为红色
                context.strokeStyle = "black";  // 画笔的颜色
                context.lineWidth = 5;  // 指定描边线的宽度
        
                context.save();
                context.beginPath();
        
                // 画笔需要保留之前的移动轨迹，所以不需要初始化清除。
                context.moveTo(x1, y1);
                context.lineTo(x2, y2);
                context.stroke();
        
                // 画笔功能，需要动态实时将当前位置赋给初始位置，以实现连续笔记，否则就是直线。
                self.X1 = self.X2;
                self.Y1 = self.Y2;
        
                context.restore();
                context.closePath();
            }
        }
    
}

xleft.onclick=function(){
    let context = canvas.getContext('2d');

        canvas.loadImage = function () {
            let self = this;
            let img = new Image();
            img.src = self.lastImage;  // 将最后保存的图片赋值给img
            context.drawImage(img, 0, 0, canvas.width, canvas.height);  // 将img展示在canvas中
        }
        
        canvas.initCanvas = function () {
            context.clearRect(0, 0, canvas.width, canvas.height);  // 清空canvas
            canvas.loadImage();  // 将最近的图片展示到canvas中
        }
    
        canvas.onmousedown = function mouseDownAction(e) {
            let self = this;
            self.X1 = e.offsetX;  // 鼠标按下时保存当前位置，为起始位置
            self.Y1 = e.offsetY;
            self.isMouseDown = true;  // 将按下的flag表示为true，拖动鼠标时使用
            self.loadImage();
        }
        
        canvas.onmousemove = function mouseMoveAction(e) {
            let self = this;
            if (self.isMouseDown) {
                self.X2 = e.offsetX;
                self.Y2 = e.offsetY;
                self.drawing(self.X1, self.Y1, self.X2, self.Y2, e);
            }
        }
        
        canvas.onmouseup = function mouseUpAction(e) {
            let self = this;
            self.lastImage = canvas.toDataURL('image/png');
            self.isMouseDown = false;
        }
    
        canvas.drawing = function (x1, y1, x2, y2, e) {
            let self = this;
            if (!context) {
                return;
            } else {
                // 设置画笔的颜色和大小
                context.fillStyle = "red";  // 填充颜色为红色
                context.strokeStyle = "white";  // 画笔的颜色
                context.lineWidth = 5;  // 指定描边线的宽度
        
                context.save();
                context.beginPath();
        
                // 画笔需要保留之前的移动轨迹，所以不需要初始化清除。
                context.moveTo(x1, y1);
                context.lineTo(x2, y2);
                context.stroke();
        
                // 画笔功能，需要动态实时将当前位置赋给初始位置，以实现连续笔记，否则就是直线。
                self.X1 = self.X2;
                self.Y1 = self.Y2;
        
                context.restore();
                context.closePath();
            }
        }

}
var huaclick=true;
huaju.onclick=function(){


    function MyPaint(id,color){

        var canvas = document.getElementById(id);

        this.canvas = canvas;

        this.color = color;

        this.ctx = this.canvas.getContext('2d');

        this.p1= {};

        this.p2 = {};

    }

    MyPaint.prototype.paintRect = function(){

        var myPaint = this;

        this.canvas.addEventListener('mousedown',function(e){

            console.info('mousedown',this);

            this.p1.x = e.offsetX;

            this.p1.y = e.offsetY;

            this.canvas.addEventListener("mousemove",myDrect);

            this.canvas.addEventListener("mouseup",function(){

                console.info("mouseup");

                console.info(myDrect);

                this.removeEventListener("mousemove",myDrect);

            })

        }.bind(this));



        function  myDrect(e,color){

            myPaint.p2.x = e.offsetX;

            myPaint.p2.y = e.offsetY;

            myPaint.ctx.width = myPaint.width;

            myPaint.ctx.height = myPaint.height;

            myPaint.ctx.fillStyle =color;

            myPaint.ctx.strokeStyle = color;

            var width = Math.abs(myPaint.p1.x-myPaint.p2.x);

            var height = Math.abs(myPaint.p1.y-myPaint.p2.y);

            myPaint.ctx.clearRect(0,0,myPaint.canvas.width,myPaint.canvas.height);

            myPaint.ctx.beginPath();
            if(myPaint.p2.x>=myPaint.p1.x){
                if(myPaint.p2.y>=myPaint.p1.y){
                    myPaint.ctx.rect(myPaint.p1.x,myPaint.p1.y,width,height);
                }else{
                    myPaint.ctx.rect(myPaint.p1.x,myPaint.p1.y,width,-height);
                }
            }else{
                if(myPaint.p2.y>=myPaint.p1.y){
                    myPaint.ctx.rect(myPaint.p1.x,myPaint.p1.y,-width,height);
                }else{
                    myPaint.ctx.rect(myPaint.p1.x,myPaint.p1.y,-width,-height);
                }

            }


            myPaint.ctx.stroke();

            myPaint.ctx.save();

        }

    }
    if(huaclick){
        huaju.style.backgroundColor="rgb(240, 237, 237)";
        huaju.style.boxShadow=" 1.5px -1.5px  1.5px  rgb(26, 25, 25)";
        // console.log(f)

        var  mp = new MyPaint('canvas',"black");
        mp.paintRect();
        huaclick=false;
    }
    else if(huaclick==false){

        huaju.style.backgroundColor="lightgrey";
        huaju.style.boxShadow="1.5px 1.5px 1.5px rgb(31 30 30)";
        huaclick=true;


    }
        


    
    

}
var black=document.getElementById("black");
var grey=document.getElementById("grey");
var he=document.getElementById("he");
black.onclick=function(){
    let context = canvas.getContext('2d');

    canvas.loadImage = function () {
        let self = this;
        let img = new Image();
        img.src = self.lastImage;  // 将最后保存的图片赋值给img
        context.drawImage(img, 0, 0, canvas.width, canvas.height);  // 将img展示在canvas中
    }
    
    canvas.initCanvas = function () {
        context.clearRect(0, 0, canvas.width, canvas.height);  // 清空canvas
        canvas.loadImage();  // 将最近的图片展示到canvas中
    }

    canvas.onmousedown = function mouseDownAction(e) {
        let self = this;
        self.X1 = e.offsetX;  // 鼠标按下时保存当前位置，为起始位置
        self.Y1 = e.offsetY;
        self.isMouseDown = true;  // 将按下的flag表示为true，拖动鼠标时使用
        self.loadImage();
    };
    
    canvas.onmousemove = function mouseMoveAction(e) {
        let self = this;
        if (self.isMouseDown) {
            self.X2 = e.offsetX;
            self.Y2 = e.offsetY;
            self.drawing(self.X1, self.Y1, self.X2, self.Y2, e);
        }
    };
    
    canvas.onmouseup = function mouseUpAction(e) {
        let self = this;
        self.lastImage = canvas.toDataURL('image/png');
        self.isMouseDown = false;
    };

    canvas.drawing = function (x1, y1, x2, y2, e) {
        let self = this;
        if (!context) {
            return;
        } else {
            // 设置画笔的颜色和大小
            context.fillStyle = "red";  // 填充颜色为红色
            context.strokeStyle = "black";  // 画笔的颜色
            context.lineWidth = 5;  // 指定描边线的宽度
    
            context.save();
            context.beginPath();
    
            // 画笔需要保留之前的移动轨迹，所以不需要初始化清除。
            context.moveTo(x1, y1);
            context.lineTo(x2, y2);
            context.stroke();
    
            // 画笔功能，需要动态实时将当前位置赋给初始位置，以实现连续笔记，否则就是直线。
            self.X1 = self.X2;
            self.Y1 = self.Y2;
    
            context.restore();
            context.closePath();
        }
    }
}
grey.onclick=function(){
    let context = canvas.getContext('2d');

    canvas.loadImage = function () {
        let self = this;
        let img = new Image();
        img.src = self.lastImage;  // 将最后保存的图片赋值给img
        context.drawImage(img, 0, 0, canvas.width, canvas.height);  // 将img展示在canvas中
    }
    
    canvas.initCanvas = function () {
        context.clearRect(0, 0, canvas.width, canvas.height);  // 清空canvas
        canvas.loadImage();  // 将最近的图片展示到canvas中
    }

    canvas.onmousedown = function mouseDownAction(e) {
        let self = this;
        self.X1 = e.offsetX;  // 鼠标按下时保存当前位置，为起始位置
        self.Y1 = e.offsetY;
        self.isMouseDown = true;  // 将按下的flag表示为true，拖动鼠标时使用
        self.loadImage();
    };
    
    canvas.onmousemove = function mouseMoveAction(e) {
        let self = this;
        if (self.isMouseDown) {
            self.X2 = e.offsetX;
            self.Y2 = e.offsetY;
            self.drawing(self.X1, self.Y1, self.X2, self.Y2, e);
        }
    };
    
    canvas.onmouseup = function mouseUpAction(e) {
        let self = this;
        self.lastImage = canvas.toDataURL('image/png');
        self.isMouseDown = false;
    };

    canvas.drawing = function (x1, y1, x2, y2, e) {
        let self = this;
        if (!context) {
            return;
        } else {
            // 设置画笔的颜色和大小
            context.fillStyle = "red";  // 填充颜色为红色
            context.strokeStyle = "grey";  // 画笔的颜色
            context.lineWidth = 5;  // 指定描边线的宽度
    
            context.save();
            context.beginPath();
    
            // 画笔需要保留之前的移动轨迹，所以不需要初始化清除。
            context.moveTo(x1, y1);
            context.lineTo(x2, y2);
            context.stroke();
    
            // 画笔功能，需要动态实时将当前位置赋给初始位置，以实现连续笔记，否则就是直线。
            self.X1 = self.X2;
            self.Y1 = self.Y2;
    
            context.restore();
            context.closePath();
        }
    }
}
he.onclick=function(){
    let context = canvas.getContext('2d');

    canvas.loadImage = function () {
        let self = this;
        let img = new Image();
        img.src = self.lastImage;  // 将最后保存的图片赋值给img
        context.drawImage(img, 0, 0, canvas.width, canvas.height);  // 将img展示在canvas中
    }
    
    canvas.initCanvas = function () {
        context.clearRect(0, 0, canvas.width, canvas.height);  // 清空canvas
        canvas.loadImage();  // 将最近的图片展示到canvas中
    }

    canvas.onmousedown = function mouseDownAction(e) {
        let self = this;
        self.X1 = e.offsetX;  // 鼠标按下时保存当前位置，为起始位置
        self.Y1 = e.offsetY;
        self.isMouseDown = true;  // 将按下的flag表示为true，拖动鼠标时使用
        self.loadImage();
    };
    
    canvas.onmousemove = function mouseMoveAction(e) {
        let self = this;
        if (self.isMouseDown) {
            self.X2 = e.offsetX;
            self.Y2 = e.offsetY;
            self.drawing(self.X1, self.Y1, self.X2, self.Y2, e);
        }
    };
    
    canvas.onmouseup = function mouseUpAction(e) {
        let self = this;
        self.lastImage = canvas.toDataURL('image/png');
        self.isMouseDown = false;
    };

    canvas.drawing = function (x1, y1, x2, y2, e) {
        let self = this;
        if (!context) {
            return;
        } else {
            // 设置画笔的颜色和大小
            context.fillStyle = "red";  // 填充颜色为红色
            context.strokeStyle = "rgb(184, 61, 47)";  // 画笔的颜色
            context.lineWidth = 5;  // 指定描边线的宽度
    
            context.save();
            context.beginPath();
    
            // 画笔需要保留之前的移动轨迹，所以不需要初始化清除。
            context.moveTo(x1, y1);
            context.lineTo(x2, y2);
            context.stroke();
    
            // 画笔功能，需要动态实时将当前位置赋给初始位置，以实现连续笔记，否则就是直线。
            self.X1 = self.X2;
            self.Y1 = self.Y2;
    
            context.restore();
            context.closePath();
        }
    }
}

