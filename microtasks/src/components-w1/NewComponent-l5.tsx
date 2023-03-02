type NewComponentPropsType = {
  clickHandler: () => void, 
  list: ListType[]
}

type ListType = {
   banknote: string,
   nominal: number,
   number: string 
}

export const NewComponent = (props: NewComponentPropsType) => {
  const { clickHandler,list} = props

 return (
   <>
     <ul>
       {list.map((objFromMoneyArr, index) => {
         return (
           <li key={index}>
             <span>{objFromMoneyArr.banknote}</span>
             <span>{objFromMoneyArr.nominal}</span>
             <span>{objFromMoneyArr.number}</span>
           </li>
         )
       })}
     </ul>
     <button value={"dollar"} onClick={() => clickHandler()}>dollar</button>
     <button value={"ruble"} onClick={() => clickHandler()}>ruble</button>
     <button value={"all"} onClick={() => clickHandler()}>all</button>
   </>
 )
}