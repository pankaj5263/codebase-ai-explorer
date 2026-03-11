# Codebase AI Explorer

AI-powered tool that understands GitHub repositories and answers engineering questions.

## Features

* GitHub repository ingestion
* Code embeddings
* Vector search
* Chat with codebase
* File-level explanations

## Tech Stack

Frontend

* React
* Vite

Backend

* Node.js
* LangChain

Data

* Qdrant Vector Database

LLM

* OpenAI / Groq

## Example Questions

* How does authentication work in this project?
* Where is caching implemented?
* Which files control checkout flow?
* Explain the architecture of this repository.

## Project Architecture

GitHub Repo
↓
Code Parsing
↓
Embeddings
↓
Vector DB
↓
AI Reasoning
↓
Answer
