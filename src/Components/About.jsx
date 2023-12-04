/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/ligthBackground.jpg";

const imageAltText = "Foto de <a href='https://unsplash.com/es/@sharonmccutcheon?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'>Alexander Grey</a> en <a href='https://unsplash.com/es/fotos/fotografia-bokeh-62vi3TG5EDg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'>Unsplash</a>";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I am a Data Engineer with experience in building data pipelines, lambda functions, SQL queries, and managing infrastructure as code in AWS. I am currently working for a technology consulting company.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Python", 
  "Pandas", 
  "Numpy", 
  "Jupyter Notebook",
  "Pyspark",
  "SQL",
  "Bash",
  "AWS DMS",
    "CloudWatch",
    "Redshift",
    "S3",
    "Cloudformation",
    "Glue",
    "Lambda",
    "SNS",
    "StepFunctions",
    "EC2",
    "AWS RDS",
    "Redshift",
    "CloudFormation",
  "Google Cloud Platform VM Instances",
    "Cloud Storage",
    "Big Query",
    "Cloud Functions",
  "Linux CentOS",
  "Linux RHEL 7", 
  "VS Code", 
  "PyCharm",
  "Docker",
  "Git",
  "Jira",
  "Scrum", 
  "Kanban",
  "DevOps",  
  "Terraform",
  "Apache Airflow"
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am a hands-on learner who enjoys the satisfaction of solving problems independently. I am proficient in Python programming and enjoy applying my skills to various projects. In addition to my technical pursuits, I am also passionate about music and sports. I find playing the guitar to be a creative outlet, while basketball provides me with a physical challenge and an opportunity to connect with others. Swimming is my favorite way to relax and rejuvenate.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
