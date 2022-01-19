function Display({notesArray, setNotesArray})
{
    function deleteNotes(index)
    {
        var newArray =[];
        for(let i=0;i<index;i++)
        {
            newArray.push(notesArray[i])
        }

        for(let i=index+1;i<notesArray.length;i++)
        {
            newArray.push(notesArray[i])
        }
        setNotesArray(newArray);
    }
    const renderNotes = (card, index) => {
        return (
            <div key={index} className="cardContent">
                <h2 className="cardTitle">{card.title}</h2>
                <h3 className="cardNote">{card.note}</h3>
                <button className="cardDelete" onClick={() => deleteNotes(index)} >DELETE</button>          
        </div>
        );
      };

    return(
    //     <div className="cardContainer">
    //     {
    //         props.notesArray.map((contents, index)=>{
    //             <div className="rederedNotes">
    //                    <h1>{contents.title}</h1>
    //                    <h1>{contents.notes}</h1>
    //             </div>
    //         })
    //     }
    // </div>
    <div class="cardContents">
        {/* {console.log(notesArray)} */}
        {notesArray.map(renderNotes)}
    </div>
    // <h1>Display components</h1>
    
    )
}

export default Display;