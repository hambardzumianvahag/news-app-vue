# News App - Vue 3

This is a simple news app built using Vue 3, Vite, Pinia, Tailwind CSS, and Vue Router. The app allows users to browse and view news articles by different categories, save articles for later, and view saved articles in a separate section.

## Features

- **News Categories**: Browse news articles by categories such as Sport, General, and more.
- **Category Selection**: Click on a category to view news specific to that topic.
- **Save Articles**: Save any news article for future reference.
- **Saved Articles Section**: View all saved articles in a separate component.
- **Sort articles by two types** click one of sort types and articles will sorted by flex or column which would you prefer.
  
## Technologies Used

- **Vue 3**: JavaScript framework for building the user interface.
- **Vite**: Fast and modern frontend build tool.
- **Pinia**: State management library used to manage global state across the app.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Vue Router**: For handling navigation and routing in the app.

## Project Setup

1. Clone the repository:

   ```bash
   git clone <repository-url>

2. Navigate to the project directory:

    cd news-app-vue

3. Install dependencies:

    npm install

4. Run the development server:

    npm run dev

5. Open the app in your browser at http://localhost:3000.

## File Structure

├── public/
├── src/
│   ├── assets/        
        ├───vue.svg
        ├──img/
            ├── image folder
│   ├── components/ 
        ├── Category.vue
        ├── Footer.vue
        ├── Header.vue
        ├── NewsCard.vue
        ├── NewsList.vue
        ├── Pagination.vue
        ├── SavedCard.vue
        ├── SavedList.vue
        ├── Footer
            ├── Categories.uve
            ├── Follow.vue
            ├── MegaNews.vue
            ├── NewsComments.vue
            ├── Privacy.vue
    ├── layouts
        ├── Default.vue
    ├── route
        ├── index.js
    ├── store
        ├── actions.js
        ├── getters.js
        ├── index.js
        ├── state.js
    ├── views
        ├── mainView.vue
        ├── savedView.vue
    ├──style.css   
│   ├── App.vue        # Main app component
│   └── main.js        # Entry point of the app
├── index.html         # Main HTML file
└── tailwind.config.js # Tailwind CSS configuration

## Usage 

- **Viewing News:** On the homepage, you can click on any category to view news articles related to that category.
- **Saving Articles:** Click on the save button to store an article in the "Saved Articles" section.
- **Viewing Saved Articles:** Navigate to the "Saved Articles" component to view your saved articles. 

## Future Enhancements

Add search functionality to find news by keywords.
Add pagination for news articles.
Integrate with a real-world news API for dynamic content.

## License