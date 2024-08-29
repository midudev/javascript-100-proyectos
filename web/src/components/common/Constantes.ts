export enum TypeLink {
  Youtube,
  Twitch,
  Github,
  Web,
}

export interface ColorsModel {
  typeLink: TypeLink;
  Colors: {
    text: string;
    hover: string;
    border: string;
  };
}
export const colorsModel: ColorsModel[] = [
  {
    typeLink: TypeLink.Youtube,
    Colors: {
      text: "text-black",
      hover: "hover:bg-[#ffc8c6]",
      border: "border-[#c4302b]",
    },
  },
  {
    typeLink: TypeLink.Twitch,
    Colors: {
      text: "text-black",
      hover: "hover:bg-[#d1b9ff]",
      border: "border-[#874af6]",
    },
  },
  {
    typeLink: TypeLink.Github,
    Colors: {
      text: "text-black",
      hover: "hover:bg-black/10",
      border: "border-black/60",
    },
  },
  {
    typeLink: TypeLink.Web,
    Colors: {
      text: "text-sky-700",
      hover: "border-sky-700/60",
      border: "hover:bg-sky-600/20",
    },
  },
];
