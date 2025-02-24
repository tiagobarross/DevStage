<h1 align="center"> 🔗 DevStage - Invite Links </h1>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000">
</p>

<br>

<p align="center">
  <img alt="project nearby" src=".github/preview.jpg" width="100%">
</p>

## 🛠 Technologies  
- **Next.js**  
- **React**  
- **TypeScript**  
- **TailwindCSS**  
- **API REST**  
- **Docker**
- **PostgreSQL**

## 📌 About  
**DevStage** was developed using React and Next.js to create an invite sharing application. The application allows users to register, generate a unique link, and share it with others.

## 📦 Installation and Use
Clone the repository and install the dependencies:
```bash
git clone https://github.com/tiagobarross/DevStage.git
cd DevStage
npm install
```

## 🔧 Running the Project Locally with Docker
This project requires Docker and Node.js to run. Follow the steps below to set it up locally.
1. Ensure you have Docker installed. If not, download and install Docker from [here](https://www.docker.com/).
2. Run the Docker container: <br>
If you have Docker installed, you can use the docker-compose.yml file included in the project to easily run everything.
```bash
docker-compose up --build
```
This will start the backend and any necessary services.

3. Access the Project Locally <br>
Once everything is up and running, visit http://localhost:3000 in your browser.

## ❗ Alternative: Running Without Docker
If you prefer not to use Docker, you can manually install and run the project locally by following these steps: <br>
1. Install dependencies:
```bash
npm install
```
2. Start the development server:
```bash
npm run dev
```
## ✍ NOTE
The project may not be compatible with serverless hosting services like Vercel due to its Docker and Node.js requirements.

## 📝 License

This project is licensed under the MIT License.
