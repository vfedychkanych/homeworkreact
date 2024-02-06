import {Simpson1} from "./components/Simpson1";

const App = () => {
    const simpsons = [{
        id:1,
        name:'Bart Simpson',
        img:'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png'
    },{
        id:2,
        name:'Homer Simpson',
        img:'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },{
        id:3,
        name:'Marge Simpson',
        img:'https://upload.wikimedia.org/wikipedia/en/0/0b/Marge_Simpson.png'
    },{
        id:4,
        name:'Lisa Simpson',
        img:'https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png'
    },{
        id:5,
        name:'Maggie Simpson',
        img:'https://upload.wikimedia.org/wikipedia/en/9/9d/Maggie_Simpson.png'
    }]
  return (
      <div>
          {simpsons.map(simpson => <Simpson1 simpson={simpson} key={simpson.id}/>)}
      </div>
  );
};

export {App};