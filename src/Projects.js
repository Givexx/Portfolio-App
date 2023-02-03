import { useState, useEffect } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

const Projects = () => {
  const [items, setItems] = useState([]);
  const itemsCollectionRef = collection(db, "items");

  useEffect(() => {
    const getItems = async () => {
      const data = await getDocs(itemsCollectionRef);
      setItems(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getItems();
  }, []);

  return (
    <div className="Projects">
      {items.map((item) => {
        return (
          <div key={item.id} className="itemDiv">
            <h3 className="itemTitle">{item.title}</h3>
            <img className="projects-img" src={item.img} alt="imgggg" />

            <a
              className="ahref"
              href={item.link}
              target="_blank"
              rel="noreferrer"
            >
              Click To View
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
