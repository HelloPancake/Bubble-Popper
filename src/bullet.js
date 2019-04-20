
class Bullet {
    constructor(ctx, canvas, x) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.bulletX = x;
        this.bulletY = 500;
        this.dy = -3;
        this.bulletRadius = 5;
    }

    drawBullet() {
        this.ctx.beginPath();
        this.ctx.arc(this.bulletX, this.bulletY, this.bulletRadius, 0, Math.PI * 2);
        this.ctx.strokeStyle = "#0095DD";
        this.ctx.stroke();
        this.ctx.closePath();
        this.bulletY += this.dy;

    }

   
}

export default Bullet;