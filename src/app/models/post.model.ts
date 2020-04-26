

export class Post {
    
    loveIts: number=0;
    created_at: Date;
    // Dans le constructeur on met les données obligatoires pour créer un post
    constructor(public title: string, public content: string) {
        this.created_at = new Date();
    }


}