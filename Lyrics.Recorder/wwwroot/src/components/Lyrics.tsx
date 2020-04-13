import * as React from "react";
import * as $  from 'jquery';
import { useState, useEffect } from "react";
import './style.css';
import {LyricsDialog, ILyrics} from "./FormPopup";



function RetriveLyrics() 
{ 

   const [Lyricss, setLyricss] = useState<ILyrics[]>([]);
  

    useEffect(() => {
        // Update the document title using the browser API
        getAllLyricss();
      },[]);


    const getAllLyricss=()=>{
        $.getJSON( "Home/GetLyricss", function(Lyricss:ILyrics[]) {
          setLyricss(Lyricss)
          });
    }

    const save=(props:ILyrics)=>
    {
         $.post( "Home/Save",{...props})
            .done(function(data:ILyrics) {
              if(props.id==null || props.id==""){
                setLyricss(oldArray => [...Lyricss, data]);
              }
              else
              {
                const index = Lyricss.findIndex((f: ILyrics) => f.id === data.id);
                setLyricss([...Lyricss.slice(0, index), data, ...Lyricss.slice(index + 1)]);
              }
              //getAllLyricss();
            });
    }

    const Lyrics:ILyrics=
    {
      title:"",artists:[],tags:[],lyrics:"",notes:""
    }

    

    return (
        <div>
         
        <LyricsDialog save={save} LyricsDetail={Lyrics} />
              
        <div className="grid-container">
              <div><h5>Lyrics Id</h5></div>
              <div><h5>Title</h5></div>
              <div><h5>Lyrics</h5></div>
              <div><h5>Notes</h5></div>
         </div>

          {Lyricss.map((Lyrics) =>
         <div className="grid-container">
            
              <div><LyricsDialog save={save} LyricsDetail={Lyrics} /></div>
              <div>{Lyrics.title}</div>
              <div>{Lyrics.lyrics}</div>
              <div>{Lyrics.notes}</div>
         </div>
          )}
        </div>
      );
}


export function Lyrics() {
    return (
        <div>
         <RetriveLyrics />
        </div>
    );
}