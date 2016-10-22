function ScoreObj(score, x, y)
{
    var life_;
    var size_;
    var score_;
    var x_, y_;

    function init() {
        score_ = score;
        x_ = x;
        y_ = y;
        life_ = 30;
        size_ = 20;
    }
    init();

    this.isActive = function() {
        return (life_ > 0);
    }

    this.draw = function(ctx) {
        ctx.font = size_ + 'pt Calibri';
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';
        ctx.fillText(score_, x_, y_);
    }

    this.update = function() {
        --life_;
        y_ -= 0.25;
        size_ = 10 + (life_ / 30) * 10;
    }

}
