import React, { useEffect, useState } from "react";
import "./index.css";

const MonkeyIntro = ({ onStartClick }) => {
  return (
    <div
      className="h-[100vh] bg-cover bg-center flex items-end"
      style={{
        backgroundImage: `url(https://thumbs.dreamstime.com/b/monkey-playing-vine-trees-middle-forest-illustration-34713733.jpg)`,
      }}
    >
      <div className="text-3xl w-full text-right text-white font-black p-4">
        <h1 className="text-5xl font-bold mb-4">Hi kiddo!</h1>
        <button
          className="h-20 w-40 rounded-full bg-green-950 hover:animate-pulse cursor:pointer"
          onClick={onStartClick}
        >
          Start
        </button>
      </div>
    </div>
  );
};

const MonkeyIntroduction = ({ onNextClick, onBackClick }) => {
  return (
    <div
      className="h-[100vh] bg-cover bg-center flex items-end"
      style={{
        backgroundImage: `url(https://thumbs.dreamstime.com/b/monkey-playing-vine-trees-middle-forest-illustration-34713733.jpg)`,
      }}
    >
      <div className="text-3xl w-full text-white font-black p-4 ml-12">
        <button
          className="h-20 w-40 rounded-full bg-green-950 hover:animate-pulse cursor:pointer"
          onClick={onBackClick}
        >
          Back
        </button>
      </div>
      <div className="text-3xl w-full text-right text-white font-black p-4">
        <h1 className="text-4xl font-bold mb-4">Hi, I am Mizo!</h1>
        <p className="text-lg mb-4">I love bananas.</p>
        <button
          className="h-20 w-40 rounded-full bg-green-950 hover:animate-pulse cursor:pointer"
          onClick={onNextClick}
        >
          Next
        </button>
      </div>
    </div>
  );
};

const MonkeyIntroscreen = ({ onNextClick, onBackClick }) => {
  return (
    <div
      className="h-[100vh] bg-cover bg-center flex items-end"
      style={{
        backgroundImage: `url(https://thumbs.dreamstime.com/b/monkey-playing-vine-trees-middle-forest-illustration-34713733.jpg)`,
      }}
    >
      <div className="text-3xl w-full text-white font-black p-4 ml-12">
        <button
          className="h-20 w-40 rounded-full bg-green-950 hover:animate-pulse cursor:pointer"
          onClick={onBackClick}
        >
          Back
        </button>
      </div>
      <div className="text-3xl w-full text-right text-white font-black p-4">
        <h1 className="text-5xl font-bold mb-4">Can you help me get some?</h1>
        <button
          className="h-20 w-40 rounded-full bg-green-950 hover:animate-pulse cursor:pointer"
          onClick={onNextClick}
        >
          Yes
        </button>
      </div>
    </div>
  );
};

const ThreeRectanglesPage = ({ onNextClick, onBackClick }) => {
  return (
    <div
      className="h-[100vh] bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `url(https://thumbs.dreamstime.com/b/monkey-playing-vine-trees-middle-forest-illustration-34713733.jpg)`,
      }}
    >
      <div className="text-3xl w-full text-white font-black p-4 ml-12">
        <button
          className="h-20 w-40 rounded-full bg-green-950 hover:animate-pulse cursor:pointer"
          onClick={onBackClick}
        >
          Back
        </button>
      </div>
      <div className="hover:animate-pulse bg-pink-200 w-1/3 h-64 p-4 mt-12 ml-12">
        <div className="mt-12">SELECT THE PINK CARD</div>
        <div>IT CONTAINS IMAGES</div>
      </div>
      <div className="hover:animate-pulse bg-blue-200 w-1/3 h-64 p-4 mt-12 ml-12">
        <div className="mt-12">SELECT THE BLUE CARD</div>
        <div>IT CONTAINS ALPHABETS</div>
      </div>
      <div className="hover:animate-pulse bg-yellow-200 w-1/3 h-64 p-4 mt-12 ml-12">
        <div className="mt-12">IF THEY ARE SAME</div>
        <div>IT'S A MATCH</div>
        <div>ELSE RETRY</div>
      </div>
      <div className="text-3xl w-full text-white font-black p-4 ml-12">
        <button
          className="h-20 w-40 rounded-full bg-green-950 hover:animate-pulse cursor:pointer"
          onClick={onNextClick}
        >
          Play
        </button>
      </div>
    </div>
  );
};

const MatchingGamePage = ({ onNextClick, cardsData }) => {
  const [openedCards, setOpenedCards] = useState([]);

  const handleCardSelect = (selectedCard) => {
    setOpenedCards((prevSelected) => [...prevSelected, selectedCard]);

    if (openedCards.length === 1) {
      setTimeout(() => {
        handleMatchCheck();
        setOpenedCards([]);
      }, 1000); // Adjust the delay time as needed
    }
  };

  const handleMatchCheck = () => {
    if (openedCards.length === 2) {
      const [card1, card2] = openedCards;
      if (card1.data.URL === card2.data.URL) {
        // Handle logic for matching cards
        console.log("Matched!");

        // Remove matched cards from the screen
        // You might need to implement a mechanism to remove the cards from the UI
      } else {
        console.log("Not matched!");
      }
    }
  };

  return (
    <div
      className="h-[100vh] bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `url(https://thumbs.dreamstime.com/b/monkey-playing-vine-trees-middle-forest-illustration-34713733.jpg)`,
      }}
    >
      <div className="grid grid-cols-4 gap-4">
        {cardsData.map((card, index) => (
          <ColoredCard
            key={index}
            color={card.color}
            handleCardSelect={() => handleCardSelect(card)}
            data={card.data}
            openedCards={openedCards}
          />
        ))}
      </div>
    </div>
  );
};

// ColoredCard component
const ColoredCard = ({ color, handleCardSelect, data, openedCards }) => {
  const isCardOpened = openedCards.some(
    (openedCard) => openedCard.data.id === data.id
  );

  const [isMatched, setIsMatched] = useState(false);

  useEffect(() => {
    // Check if the card is part of the openedCards
    const isOpened = openedCards.some(
      (openedCard) => openedCard.data.id === data.id
    );

    // If the card is part of openedCards, check if it's a match
    if (isOpened && openedCards.length === 2) {
      const [card1, card2] = openedCards;
      if (card1.data.id === card2.data.id) {
        setIsMatched(true);
      } else {
        setIsMatched(false);
      }
    }
  }, [data.id, openedCards]);

  return (
    <div className="ml-12 mt-8">
      <button
        onClick={handleCardSelect}
        className="focus:outline-none"
        disabled={isCardOpened}
      >
        <div
          className={`bg-${color}-300 p-4 rounded mb-4 w-[20vh] h-[30vh] mt-12 ml-12 transform transition-transform duration-500 ease-in-out`}
        >
          {isCardOpened ? (
            <img src={data.URL} alt={`Card ${data.id}`} />
          ) : (
            "Click to reveal"
          )}
        </div>
      </button>
    </div>
  );
};

export default function App() {
  const [page, setPage] = useState(1);
  const [cardsData] = useState([
    {
      color: "pink",
      data: {
        id: 1,
        URL: "https://lh3.googleusercontent.com/-wjyF2TUyBnY/TwFGkVtA09I/AAAAAAAAA3I/n1yaTqj3VAM/w1200-h630-p-k-no-nu/Pink_Apple_Macbook_Review.jpg",
        isRevealed: false,
      },
    },
    {
      color: "pink",
      data: {
        id: 2,
        URL: "https://tse3.mm.bing.net/th?id=OIP.v8nk7vQBFA6AFLWDNqCeBAHaHa&pid=Api&P=0&h=180",
        isRevealed: false,
      },
    },
    {
      color: "pink",
      data: {
        id: 3,
        URL: "https://tse4.mm.bing.net/th?id=OIP.t4a96LUE0eGsGlCpztHkPAHaGl&pid=Api&P=0&h=180",
        isRevealed: false,
      },
    },
    {
      color: "pink",
      data: {
        id: 4,
        URL: "https://tse2.mm.bing.net/th?id=OIP._AUaCtr0-gYMUIogDZ4uHQHaIP&pid=Api&P=0&h=180",
        isRevealed: false,
      },
    },
    {
      color: "blue",
      data: {
        id: 5,
        URL: "https://lh3.googleusercontent.com/-wjyF2TUyBnY/TwFGkVtA09I/AAAAAAAAA3I/n1yaTqj3VAM/w1200-h630-p-k-no-nu/Pink_Apple_Macbook_Review.jpg",
        isRevealed: false,
      },
    },
    {
      color: "blue",
      data: {
        id: 6,
        URL: "https://tse3.mm.bing.net/th?id=OIP.v8nk7vQBFA6AFLWDNqCeBAHaHa&pid=Api&P=0&h=180",
        isRevealed: false,
      },
    },
    {
      color: "blue",
      data: {
        id: 7,
        URL: "https://tse4.mm.bing.net/th?id=OIP.t4a96LUE0eGsGlCpztHkPAHaGl&pid=Api&P=0&h=180",
        isRevealed: false,
      },
    },
    {
      color: "blue",
      data: {
        id: 8,
        URL: "https://tse2.mm.bing.net/th?id=OIP._AUaCtr0-gYMUIogDZ4uHQHaIP&pid=Api&P=0&h=180",
        isRevealed: false,
      },
    },
  ]);

  const handleStartClick = () => {
    setPage(2);
  };

  const handleNextClick = () => {
    if (page < 14) {
      setPage((prev) => prev + 1);
    }
  };

  const handleBackClick = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  switch (page) {
    case 1:
      return <MonkeyIntro onStartClick={handleStartClick} />;
    case 2:
      return (
        <MonkeyIntroduction
          onBackClick={handleBackClick}
          onNextClick={handleNextClick}
        />
      );
    case 3:
      return (
        <MonkeyIntroscreen
          onBackClick={handleBackClick}
          onNextClick={handleNextClick}
        />
      );
    case 4:
      return (
        <ThreeRectanglesPage
          onBackClick={handleBackClick}
          onNextClick={handleNextClick}
        />
      );
    case 5:
      return <MatchingGamePage cardsData={cardsData} />;
    default:
      return null;
  }
}
