export class Tag {
    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly HTML = new Tag('Html', 'orange');
    static readonly CSS = new Tag('Css', 'blue');
    static readonly JAVA = new Tag('Java', 'maroon');
    static readonly JAVASCRIPT = new Tag('JavaScript', 'gold');
    static readonly TYPESCRIPT = new Tag('TypeScript', 'navy');
    static readonly REACT = new Tag('React', 'aqua');
    static readonly CSHARP = new Tag('C#', 'purple');
    static readonly PHP = new Tag('Php', 'teal');
    static readonly BOOTSTRAP = new Tag('Bootstrap', 'fuchsia');
    static readonly VUEJS = new Tag('Vue.JS', 'green');
    static readonly NODEJS = new Tag('Node.JS', 'lime');


    private constructor(private readonly key: string, public readonly color: string){

    }
    
    toString(){
        return this.key
    }
    
}