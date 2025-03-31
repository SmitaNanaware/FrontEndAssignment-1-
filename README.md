## Step-by-Step Guide to Set Up and Run the Project with React and Vite

### 1. **Create a React Project with Vite**

Vite is a modern, fast build tool for front-end development. To create a new React project using Vite, follow these steps:

#### 1.1. Run the Command to Create the Project

Open your terminal and run the following command to create a new React project using the Vite template:

```bash
npm create vite@latest react-table-dropdown --template react
```

This command will create a new directory called `react-table-dropdown` and set up the project with Vite and React.

#### 1.2. Navigate to the Project Directory

Once the project is created, navigate into the project folder:

```bash
cd react-table-dropdown
```

### 2. **Install the Dependencies**

Next, install the dependencies for the project. In the project directory, run the following:

```bash
npm install
```

This command will install all the required dependencies listed in the `package.json` file.

### 3. **Run the Development Server**

Now, you can run the development server using the following command:

```bash
npm run dev
```

Once this command is executed, Vite will start the development server. By default, the application will be available at `http://localhost:5173`.

### 4. **Open the Application in the Browser**

Open your web browser and go to `http://localhost:5173` to view the running application.

---
## 📸 Screenshots
![image](https://github.com/SmitaNanaware/ZeotapAssignment1/blob/main/Screenshot%20Google%20Sheet.png?raw=true)


## Key Components of the Project

### 1. **App.jsx**

This is the main React component that holds the table with the dropdowns. It manages the state for the rows and the available options for the dropdowns.

- **Single-select dropdown (Label 1)**: The user selects one option from a list. Once selected, the option becomes unavailable for the other rows.
- **Multi-select dropdown (Label 2)**: The user can select multiple options and can also add new items to the list.

### 2. **TableRow.jsx**

This component represents each row in the table. It contains the logic for selecting options in both dropdowns and ensures that options from the first column are not available in subsequent rows.

### 3. **App.css**

This file contains basic CSS styles for the table, dropdowns, and the "Add New Row" button.

---

## How the Table Works

### **Label 1 (Single Select Dropdown)**

- Displays a dropdown with multiple options (e.g., Option 1, Option 2, etc.).
- Once an option is selected in one row, that option is disabled in the dropdowns of other rows.

### **Label 2 (Multi-Select Dropdown)**

- A multi-select dropdown allows the user to select multiple options.
- Users can also add new items to the list through an input field that appears at the bottom of the dropdown.

### **Add New Row Button**

- When the user clicks the "Add New Row" button, a new row is added to the table, and the dropdowns in that row are reset, allowing the user to select options independently.

---

## Conclusion

After following the steps above, you should now have the **React** and **Vite** application running locally. You can now interact with the dynamic table, select options from the dropdowns, and add new rows to the table.

If you encounter any issues or want to customize the functionality further, you can explore and modify the code in the `App.jsx` and `TableRow.jsx` components.

