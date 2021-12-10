import { by639_1 } from 'iso-language-codes';

type LanguageCode = keyof typeof by639_1;
type Author = { firstName: string; lastName: string };
type Tag = string; // update

export class Poem {
  id: number;
  language: LanguageCode;
  author: Author;
  title: string;
  body: string;
  tags: Tag[];

  constructor(
    id: number,
    language: LanguageCode,
    author: Author,
    title: string,
    body: string,
    tags: Tag[]
  ) {
    this.id = id;
    this.language = language;
    this.author = author;
    this.title = title;
    this.body = body;
    this.tags = tags;
  }

  public static placeholder(): Poem {
    return new Poem(id, langCode, author, title, body, tags);
  }

  public static logCodes(): void {
    console.log(by639_1);
  }
}

const id = 1;
const langCode = 'en';
const author = {
  firstName: 'Wislawa',
  lastName: 'Szymborska',
};
const title = 'A Speech at the Lost-and-Found';
const tags = ['clinging'];
const body =
  'I lost a few goddesses while moving south to north,\n\
and also some gods while moving east to west.\n\
I let several stars go out for good, they can’t be traced.\n\
An island or two sank on me, they’re lost at sea.\n\
I’m not even sure exactly where I left my claws,\n\
who’s got my fur coat, who’s living in my shell.\n\
My siblings died the day I left for dry land\n\
and only one small bone recalls that anniversary in me.\n\
I’ve shed my skin, squandered vertebrae and legs,\n\
taken leave of my senses time and again.\n\
I’ve long since closed my third eye to all that,\n\
washed my fins of it and shrugged my branches.\n\
Gone, lost, scattered to the four winds. It still surprises me\n\
how little now remains, one first person sing, temporarily\n\
declined in human form, just now making such a fuss\n\
about a blue umbrella left yesterday on a bus.';
