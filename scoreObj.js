function ScoreObj(score, x, y)
{
    var life_ = 30;
    var size_ = 20;

    this.isActive = function() {
        return (life_ > 0);
    }

    this.draw = function(ctx) {
        ctx.font = size_ + 'pt Calibri';
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';
        ctx.fillText(score, x, y);
    }

    this.update = function() {
        --life_;
        y -= 0.25;
        size_ = 10 + (life_ / 30) * 10;
    }

}
