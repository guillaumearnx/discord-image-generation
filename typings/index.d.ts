declare abstract class ImageGenerator {
    abstract getImage(...args: any[]): Promise<Buffer>;
}

declare class DefaultImageGenerator extends ImageGenerator {
    getImage(avatar: string): Promise<Buffer>;
}

export class Affect extends DefaultImageGenerator {}
export class Bobross extends DefaultImageGenerator {}
export class Delete extends DefaultImageGenerator {}
