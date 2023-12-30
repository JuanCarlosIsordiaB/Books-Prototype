import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAppContext from '../store/store'
import { Layout } from "../components/layout";

export const Create = () =>  {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [cover, setCover] = useState('');
    const [intro, setIntro] = useState('');
    const [completed, setCompleted] = useState(false);
    const [review, setReview] = useState('');

    const store = useAppContext();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;


        switch(name){
            case 'title':
                setTitle(value);
                break;

            case 'author':
                setAuthor(value);
                break;
            case 'intro':
                setIntro(value);
                break;

            case 'completed':
                setCompleted(e.target.checked);
                break;
            case 'review':
                setReview(value);
                break;
            
        }
    }

    const handleChangeFile = (e) => {
        const element = e.target;
        var file = element.files[0];
        var reader = new FileReader();
        reader.onloadend = function () {
            console.log("RESULT", reader.result);
            setCover(reader.result.toString());
        };
        reader.readAsDataURL(file);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newBook = {
            id: crypto.randomUUID(),
            title,
            author,
            cover,
            intro,
            completed,
            review
        };

        store.createItem(newBook);
        navigate('/');
    }

    return (
        <Layout>
            <form 
                className="form"
                onSubmit={handleSubmit}
            >
                
                <div>
                    <span className="title">Title</span>
                    <input 
                        placeholder="Enter the title" 
                        type="text" 
                        name="title" 
                        id="email-address" 
                        onChange={handleChange}
                        value={title}
                    />
                </div>
                <div>
                    <span className="title">Author</span>
                    <input 
                        placeholder="Enter the author" 
                        type="text" 
                        name="author" 
                        id="email-address" 
                        onChange={handleChange}
                        value={author}
                    />
                </div>
                <div>
                    <span className="title">Cover</span>
                    <input 
                        type="file" 
                        name="cover" 
                        onChange={handleChangeFile}
                    />
                    <div>
                        {
                            !! cover ? <img src={cover} width='200' alt="preview"  /> : ''
                        }
                    </div>
                </div>
                <div>
                    <span className="title">Introduction</span>
                    <input 
                        placeholder="Enter the introduction" 
                        type="text" 
                        name="intro" 
                        onChange={handleChange}
                        value={intro}
                    />
                </div>
                <div>
                    <span className="title">Completed</span>
                    <input 
                        type="checkbox" 
                        name="completed" 
                        onChange={handleChange}
                        value={completed}
                    />
                </div>
                <div>
                    <span className="title">Review</span>
                    <input 
                        placeholder="Enter a Review"
                        type="text" 
                        name="review" 
                        onChange={handleChange}
                        value={review}
                    />
                </div>
                <button type="submit" className="button-submit">Submit</button>
            </form>
        </Layout>
    )
}

export default Create