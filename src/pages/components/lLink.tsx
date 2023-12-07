
type LinkProps = {
  link : string;
  name: string;
  color : string;
}

export default function Link({link, name, color}: LinkProps) {
    const col = color === undefined ? '#212121' : color;
    return <a href={link} target={'_blank'} style={{textDecoration:'none', color : `${col}`}}>{name}</a>;
}