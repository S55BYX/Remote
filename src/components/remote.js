

export default function remote(props){

    function handleClick(){
        props.setPressed(true)
        setTimeout(() => {
            props.setPressed(false)
            }, 500)
    }

    const btnValues = [
        ["1", "2", "3"],
        ["4", "5", "6"],
        ["7", "8", "9"],
        ["HOME", "0", "@"],
        ["OPTS", <span class="material-icons">arrow_upward</span>, "INFO"],
        [<span class="material-icons">west</span>, <span class="material-icons">arrow_upward</span>, <span class="material-icons">east</span>],
        ["BACK", <span class="material-icons">arrow_downward</span>, "EXIT"],
      ];

    return(
        <div class="parent">
        {
          btnValues.flat().map((btn, i) => {
            return (
              <div
                key={i}
                className={"grid-item"}
                value={btn}
                onClick={handleClick}
              >{btn} </div>
            );
          })
        }
        </div>
    )
}