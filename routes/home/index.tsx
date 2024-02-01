import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "~app/components/button";
import { sendMessageToContent } from "~app/utils/message-generator";
import { getItemFromStorage } from "~app/utils/storage";
import './home.css'

export const Home = () => {
  const [isLoading, setLoading] = useState(true);
  const [paragraphContents, setContent] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const content = await getItemFromStorage('paragraphs')
      setContent(content);
    } catch (error) {
      console.error('Error while fetching contents', error);
    } finally {
      setLoading(false);
    }
  };

  const generateMeessage = () => {
    sendMessageToContent('Generate Message')
  }

  return (
    <div className="container">
      <div className="header">
        <h1>Home page (Scrapped Content)</h1>
        <Button label="Logout" style={{ width: '70px', height: '30px', padding: 0, margin: 0 }} onClick={() => navigate('/login')} />
      </div>

      {isLoading ? (
        <div className="loading">Loading....</div>
      ) : (
        paragraphContents.map((content, index) => (
          <div key={index}>{index + 1}: {content}</div>
        ))
      )}

      <Button label="Generate Message" onClick={() => generateMeessage()}></Button>
    </div>
  );
};
