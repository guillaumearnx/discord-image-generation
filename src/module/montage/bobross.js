const { createCanvas, loadImage } = require(`canvas`);

module.exports = class Bobross {
    /**
   * Bobross
   * @param {image} image1
  */
    async getImage(image1) {
        if (!image1) throw new Error(`You must provide an image as an argument`);
        const base = await loadImage(`${__dirname}/../../assets/bobross.png`);
        const canvas = createCanvas(base.width, base.height);
        const ctx = canvas.getContext(`2d`);
        image1 = await loadImage(image1);
        ctx.fillStyle = `white`;
        ctx.fillRect(0, 0, base.width, base.height);
        ctx.drawImage(image1, 15, 20, 440, 440);
        ctx.drawImage(base, 0, 0);
        ctx.textAlign = `center`;
        ctx.textBaseline = 'middle';
        ctx.font = `35px sans-serif`;
        ctx.fillText('We don\'t make mistakes,', base.width/2, base.height-80);
        ctx.fillText('we just have happy accidents.', base.width/2, base.height-30);
        return canvas.toBuffer();
    }
};
