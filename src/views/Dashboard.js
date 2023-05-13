import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, database } from "../config/firebase";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import moment from "moment";
import {
  ref,
  push,
  onValue,
  child,
  remove,
  update,
  set,
} from "firebase/database";
import { updateNote, deleteNote, writeNote } from "../store";
import edit from "../edit.svg";
import add from "../add.svg";
import deleted from "../x-circle.svg";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";

const Dashboard = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [notes, setNotes] = useState([]);
  const [onEdit, setOnEdit] = useState(false);
  const [tempUid, setTempUid] = useState("");
  const [currentUser, setCurrentUser] = useState([]);

  //FOR TAKE UID IN LOGGED IN
  useEffect(() => {
    const getUser = () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setCurrentUser(user);
        }
      });
    };
    getUser();
  }, []);

  //SHOW DATA TO FRONT
  useEffect(() => {
    const showData = () => {
      const uid = currentUser.uid;
      onValue(ref(database, "notes/" + `${uid}/`), (snapshot) => {
        const data = snapshot.val();
        if (data !== null) {
          setNotes(data);
        }
      });
    };
    showData();
  }, [currentUser]);

  //Write Database
  const writeTheDatabase = () => {
    const uid = currentUser.uid;
    const nid = uuidv4();
    writeNote(uid, nid, title, content);
    setTitle("");
    setContent("");
  };

  //Delete database
  const handleDelete = (notes) => {
    const uid = currentUser.uid;
    deleteNote(uid, notes.uid);
  };

  //Update database
  const handleUpdateChange = (notes) => {
    setTitle(notes.title);
    setTempUid(notes.uid);
    setContent(notes.content);
    setOnEdit(true);
  };

  const handleUpdateSubmit = () => {
    const uid = currentUser.uid;
    updateNote(uid, tempUid, title, content);
    setContent("");
    setTitle("");
    setTempUid("");
    setOnEdit(false);
  };

  return (
    <div>
      <Navbar email={currentUser.email} />
      <div className="flex flex-col gap-10 mt-20 md:mt-20 items-center justify-center flex-wrap mx-5">
        {/* Put this part before </body> tag */}
        <input type="checkbox" id="add-note" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="add-note"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="text-lg font-bold">Add notes</h3>
            <div className="flex py-4 gap-4 flex-col">
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="input
          input-bordered input-primary w-full max-w-xs"
              />
              <textarea
                className="textarea textarea-secondary"
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
              <div className="modal-action">
                <label htmlFor="add-note">
                  {onEdit ? (
                    <button
                      onClick={handleUpdateSubmit}
                      className="btn btn-primary btn-md"
                    >
                      Save Change
                    </button>
                  ) : (
                    <button
                      onClick={writeTheDatabase}
                      className="btn btn-primary btn-md"
                    >
                      Save
                    </button>
                  )}
                </label>
              </div>
            </div>
          </div>
        </div>

        <div
          className="result gap-5 flex flex-wrap md:w-[50%] overflow-y-scroll
        max-h-96"
        >
          {notes !== null
            ? notes &&
              Object.keys(notes).map((key) => (
                <>
                  <Card
                    key={key}
                    title={notes[key].title}
                    content={notes[key].content}
                  />
                  <button>
                    <label
                      onClick={() => handleUpdateChange(notes[key])}
                      htmlFor="add-note"
                      className="flex btn-xs gap-2 btn btn-secondary"
                    >
                      <img src={edit} />
                      Edit
                    </label>
                  </button>
                  <button
                    onClick={() => handleDelete(notes[key])}
                    className="flex gap-2 btn-xs btn btn-error"
                  >
                    <img src={deleted} />
                    Delete
                  </button>
                </>
              ))
            : ""}
        </div>
        <div className="btm-nav">
          <button className="text-primary active">
            <label htmlFor="add-note" className="btn btn-sm ">
              <img src={add} />
            </label>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
