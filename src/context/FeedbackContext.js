import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import feedbackdata from '../data/FeedbackData';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  //   const [feedback, setFeedback] = useState([
  //     {
  //       id: 1,
  //       text: 'this item is from context',
  //       rating: 10,
  //     },
  //   ]);

  const [feedback, setFeedback] = useState(feedbackdata);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  /**
   * Function to delete feedback items.
   */
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete??')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  /**
   * Function to add feedback items.
   */
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  /**
   * Function to delete feedback items.
   */
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  /**
   * Function to update data
   */

  const updateFeedback = (id, updateItem) => {
    setFeedback(
      feedback.map((item) =>
        item.id === id ? { ...item, ...updateItem } : item
      )
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
