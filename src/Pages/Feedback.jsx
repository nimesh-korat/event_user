import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function GiveFeedback() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    rating: "",
    review: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_MONGO_BASE_URL}/user/addFeedback`,
        {
          review: formData.review,
          rating: formData.rating,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );

      if (response.data.success) {
        toast.success("Feedback submitted successfully!", {
          autoClose: 1500,
          onClose: () => navigate("/"),
        });
      }

      setFormData({
        rating: "",
        review: "",
      });
    } catch (error) {
      console.error("Error submitting feedback:", error);
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <div className="page-heading-about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Feedback</h2>
              <span>Your satisfaction is our top priority</span>
            </div>
          </div>
        </div>
      </div>
      <div className="about-item">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="card p-4 shadow">
                <form
                  name="feedback_form"
                  id="feedback_form"
                  onSubmit={handleSubmit}
                >
                  <label>How do you rate your overall experience?</label>
                  <div className="mb-3 d-flex flex-row py-1">
                    <div className="form-check mr-3">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="rating"
                        id="rating_bad"
                        value="bad"
                        onChange={handleChange}
                        checked={formData.rating === "bad"}
                      />
                      <label className="form-check-label" htmlFor="rating_bad">
                        Bad
                      </label>
                    </div>
                    <div className="form-check mx-3">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="rating"
                        id="rating_good"
                        value="good"
                        onChange={handleChange}
                        checked={formData.rating === "good"}
                      />
                      <label className="form-check-label" htmlFor="rating_good">
                        Good
                      </label>
                    </div>
                    <div className="form-check mx-3">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="rating"
                        id="rating_excellent"
                        value="excellent"
                        onChange={handleChange}
                        checked={formData.rating === "excellent"}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="rating_excellent"
                      >
                        Excellent!
                      </label>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="form-label" htmlFor="feedback_review">
                      review:
                    </label>
                    <textarea
                      className="form-control"
                      required
                      rows={6}
                      name="review"
                      id="feedback_review"
                      value={formData.review}
                      onChange={handleChange}
                    />
                  </div>
                  <button type="submit" className="btn btn-success btn-lg">
                    Post
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GiveFeedback;
