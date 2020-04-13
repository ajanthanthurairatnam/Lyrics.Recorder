import * as React from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useEffect } from "react";
import { FormControlLabel } from "@material-ui/core";

interface ILyricsDialog{
    save(props:ILyrics):void,
    LyricsDetail:ILyrics
}

export interface IArtist
{
  artistName:string
}

export interface ILyrics
{
    id?:string,
    title:string,
    artists:IArtist[],
    tags:string[],
    lyrics:string,
    notes:string
}

export  function LyricsDialog(props:ILyricsDialog) {

  const {save,LyricsDetail} ={...props}
  const [open, setOpen] = React.useState<boolean>(false);
  const [Lyrics, setLyrics] = React.useState<ILyrics>({title:"",artists:[],tags:[],lyrics:"",notes:""});


  useEffect(() => {
    // Update the document title using the browser API
    setLyrics({...LyricsDetail});
 
  },[LyricsDetail.id]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const saveAndClose = () => {
    setLyrics({id:null,title:"",artists:[],tags:[],lyrics:"",notes:""});
    save({...Lyrics});
    handleClose();
  };

  const getLyrics=(id:string)=>{
    $.getJSON(`Home/GetById?id=${id}`, function(Lyrics:ILyrics) {
       setLyrics(Lyrics)
      });
    }

  return (
    <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
              {(LyricsDetail.id==null || LyricsDetail.id=="") ? "Add" : LyricsDetail.id}
            </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter Lyrics details.
          </DialogContentText>
          {
            ( Lyrics.id!=null || Lyrics.id!="")?
            Lyrics.id:""
          }
          <TextField
            autoFocus
            margin="dense"
            id="firsttitleName"
            label="Title"
            type="text"
            defaultValue={Lyrics.title}
            onBlur={
                (e)=>
                    {
                        const con={...Lyrics};
                        con.title=e.target.value;
                        setLyrics(con);
                    }
                }
            fullWidth
          />
        <TextField
            margin="dense"
            id="lyrics"
            label="Lyrics"
            defaultValue={Lyrics.lyrics}
            type="text"
            onBlur={
                (e)=>
                    {
                        const con={...Lyrics};
                        con.lyrics=e.target.value;
                        setLyrics(con);
                    }
                }
            fullWidth
          />
        <TextField
            margin="dense"
            id="notes"
            label="Notes"
            defaultValue={Lyrics.notes}
            type="text"
            onBlur={
                (e)=>
                    {
                        const con={...Lyrics};
                        con.notes=e.target.value;
                        setLyrics(con);
                    }
                }
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={saveAndClose} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
