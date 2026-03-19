# devops_repo
# 🚀 Linux Commands Cheat Sheet for Beginners (DevOps Foundation)
This document is a quick reference for **file management, navigation, and text processing in Linux**.

---

## 📂 1. System Information Commands

* `pwd` → Shows Present Working Directory
* `whoami` → Displays current logged-in user
* `date` → Shows current system date & time

📌 *Use Case:* Helpful while working on remote servers.

---

## 📁 2. Listing Files & Directories

* `ls` → List files and directories
* `ls -lt` → Sort by latest modified
* `ls -ltr` → Oldest files first
* `ls -lh` → Human-readable file sizes

📌 *Use Case:* Quickly analyze directory contents.

---

## 📄 3. Viewing File Content

* `cat filename` → Display full file content
* `less filename` → Scroll & search inside file
* `more filename` → View file page by page

📌 *Use Case:* Reading logs and configuration files.

---

## ✏️ 4. File Creation & Editing

* `touch filename` → Create new file
* `vi filename` → Edit file (advanced editor)
* `nano filename` → Edit file (beginner-friendly)

📌 *Use Case:* Modify configs and scripts on servers.

---

## 📁 5. Directory Management

* `mkdir dirname` → Create directory
* `rmdir dirname` → Delete empty directory

📌 *Use Case:* Organize project files.

---

## 📂 6. Navigation Commands

* `cd /path/folder` → Move to directory
* `cd ..` → Move one level up

📌 *Use Case:* Navigate file system efficiently.

---

## 📦 7. File Operations

* `cp file /dest/path` → Copy file
* `cp fileA fileB` → Duplicate file
* `mv file /dest/path` → Move file
* `mv old new` → Rename file

📌 *Use Case:* File transfer, backup, and renaming.

---

## 🗑️ 8. File Deletion

* `rm filename` → Delete file

⚠️ *Warning:* File deletion is permanent.

---

## 📊 9. File Content Processing

* `head -5 file` → Top 5 lines
* `tail -5 file` → Last 5 lines
* `sort file` → Sort content
* `sort -r file` → Reverse sort
* `sort file | uniq` → Unique values

📌 *Use Case:* Data analysis in logs and datasets.

---

## 🔍 10. Search & Split

* `grep "word" file` → Search keyword
* `split -l 3 file` → Split file into parts

📌 *Use Case:* Log filtering and large file handling.

---

## 🎯 Key Takeaways

* Linux is the **foundation of DevOps & Cloud Engineering**
* These commands are used daily in **real-world production environments**
* Mastering them improves **efficiency and automation skills**
# 🚀 Day 2 of My DevOps Journey – Advanced Linux Commands

Today I explored some **powerful Linux commands** used for searching, filtering, comparing, and managing files efficiently.

These commands are widely used in **real-world DevOps, log analysis, and automation tasks**.

---

## 🔍 1. Search Commands

### `grep "word" file`

Search for a word inside a file and display matching lines.

📌 *Use Case:*
Find errors in logs or specific keywords in large files.

---

### `egrep "word1|word2" file`

Search for multiple words in a file.

📌 *Use Case:*
Filter multiple patterns like **error OR warning** in logs.

---

## 📁 2. Pattern & Bulk File Creation

### `ls *`

Lists all files in the current directory.

📌 *Use Case:*
Quick view of all files.

---

### `touch file{1..10}`

Creates multiple files automatically.

📌 *Example Output:*
file1, file2, file3 … file10

📌 *Use Case:*
Creating test files or datasets quickly.

---

## 📊 3. File Analysis

### `wc -l filename`

Counts number of lines in a file.

📌 *Use Case:*
Analyze logs, datasets, or records count.

---

## ⚖️ 4. File Comparison

### `cmp fileA fileB`

Checks if two files are identical.

📌 *Use Case:*
Verify backups or file integrity.

---

### `diff -u fileA fileB`

Shows differences between two files.

📌 *Use Case:*
Compare configurations or code changes.

---

## 🔎 5. File Search in System

### `find /path -name filename`

Search for a file in a directory.

📌 *Use Case:*
Locate files in large server environments.

---

## 🎯 Key Takeaways

* Linux provides powerful tools for **searching and analyzing data**
* These commands are essential for **DevOps engineers handling logs and systems**
* Helps improve **efficiency in troubleshooting and automation**

---

🚀 *Learning step by step towards becoming a DevOps Engineer.*

#Day2 #DevOpsJourney #LinuxCommands #AWS #CloudComputing #LearningInPublic


---

🚀 **Day 1 of my DevOps journey — more learning coming soon!**

#Linux #DevOps #AWS #CloudComputing #LearningInPublic #TechSkills #CareerGrowth
