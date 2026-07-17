# 🌿 Nature Image Gallery

An interactive, responsive, and clean Nature Image Gallery built with semantic HTML5, CSS3, and Vanilla JavaScript. This project was developed as a task for the **CodeAlpha Frontend Web Development Internship**.

---

## 🚀 Features

*   **Dynamic Category Filtering:** Filter images smoothly across multiple categories (Mountains, Forest, Lakes, Desert, Beach, Waterfalls, Sunsets, and Flowers) without reloading the page.
*   **Interactive Lightbox Modal:** Click on any image to open it in a full-screen view.
*   **Seamless Navigation:** Browse through filtered images inside the lightbox using on-screen navigation arrows or your keyboard.
*   **Keyboard Controls:** 
    *   `ArrowRight` -> Next Image
    *   `ArrowLeft` -> Previous Image
    *   `Escape` -> Close Lightbox
*   **Smart Counter:** Displays the current image position relative to the active category total (e.g., `1 / 4`).
*   **Direct Download Asset:** Integrated download link inside the lightbox to instantly save the active image.
*   **Back to Top Button:** Smooth scrolling button that appears when scrolling down, allowing users to return to the top instantly.

---

## 🛠️ Technologies Used

*   **HTML5:** Structured semantic elements (`<header>`, `<div class="gallery">`, `<footer>`).
*   **CSS3:** Custom responsive layout, smooth transitions, and stylized user interface elements (linked via `style.css`).
*   **JavaScript (ES6+):** Pure Vanilla JS utilizing DOM manipulation, Event Delegation, array methods, and global event listeners.

---

## 📂 File Structure

```text
CodeAlpha_ImageGallery/
│
├── index.html          # Core structure and image data elements
├── style.css           # Styling for gallery grid, buttons, and lightbox layout
├── script.js          # Logic for filtering, counter, controls, and smooth scrolling
└── image/              # Directory containing local asset files (image1.jpg to image24.jpg)
