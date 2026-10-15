# Restaurant Project

## Team Workflow

This repository is for collaborative development of the Restaurant Project. All team members must follow the same Git and GitHub workflow to keep the project organized.

## 1. Getting Started

Clone the repository:

```bash
git clone <REPOSITORY_URL>
cd Restaurant_Project
```

Check your current branch:

```bash
git status
git branch
```

## 2. Branch Strategy

- `main`: Stable, reviewed code.
- `feature/`: New features.
- `fix/`: Bug fixes.
- `docs/`: Documentation changes.
- `refactor/`: Code improvements.
- `test/`: Tests.

Examples:

```bash
feature/menu-page
feature/restaurant-details
fix/login-validation
docs/update-readme
```

**Never work directly on `main`. Create a branch for every task.**

## 3. Step-by-Step Workflow

### Step 1: Update main

```bash
git switch main
git pull origin main
```

### Step 2: Create a branch

```bash
git switch -c feature/menu-page
```

### Step 3: Write and test your code

Implement only your assigned task. Test your changes before committing.

### Step 4: Review your changes

```bash
git status
git diff
```

### Step 5: Commit your work

```bash
git add .
git commit -m "feat: add menu page"
```

Check that you are not committing secrets or unrelated files before using `git add .`.

### Step 6: Push your branch

```bash
git push -u origin feature/menu-page
```

### Step 7: Open a Pull Request

On GitHub:

1. Click **Compare & pull request**.
2. Set the base branch to `main`.
3. Set the compare branch to your feature branch.
4. Describe your changes and testing.
5. Request a teammate's review.

### Step 8: Review and merge

Fix review comments, push updates, and merge only after approval and required checks pass.

### Step 9: Update your local main

```bash
git switch main
git pull origin main
git branch -d feature/menu-page
```

## 4. Commit Message Convention

Use this format:

`type: short description`

Examples:

- `feat: add restaurant menu`
- `fix: validate reservation date`
- `docs: update README`
- `refactor: improve menu component`
- `test: add menu tests`
- `chore: configure project`

## 5. Pull Request Template

```markdown
## Summary
- What did you change?
- Why was it needed?

## How to Test
1. Run the relevant feature.
2. Verify the expected behavior.

## Checklist
- [ ] Changes tested
- [ ] Code reviewed
- [ ] No secrets committed
- [ ] Documentation updated if needed
```

## 6. Handling Merge Conflicts

1. Run `git status`.
2. Open the conflicted files.
3. Resolve the conflict markers.
4. Keep the correct combined changes.
5. Test the result.
6. Commit and push the resolution.

```bash
git add <resolved-file>
git commit
git push
```

Never resolve conflicts blindly. Ask the teammate responsible for the affected code if necessary.

## 7. Team Rules

1. One task per branch.
2. Coordinate before editing shared files.
3. Keep Pull Requests focused and small.
4. Never commit passwords, API keys, or `.env` files.
5. Never force-push to shared branches.
6. Pull the latest `main` before starting a task.
7. Test changes before opening a PR.
8. Review teammates' code respectfully.
9. Protect `main` with Pull Request reviews when possible.
10. Update documentation when project setup changes.

## 8. Definition of Done

A task is complete when:

- [ ] Requirements are satisfied.
- [ ] Changes have been tested.
- [ ] Pull Request has been reviewed.
- [ ] Changes have been merged into `main`.
- [ ] Documentation has been updated if necessary.
- [ ] Related task or Issue has been updated.

## 9. Useful Git Commands

| Command | Purpose |
|---|---|
| `git status` | Check changes |
| `git branch` | List branches |
| `git switch main` | Switch to main |
| `git pull origin main` | Update main |
| `git switch -c feature/name` | Create a branch |
| `git diff` | Review changes |
| `git add <file>` | Stage changes |
| `git commit -m "message"` | Commit changes |
| `git push` | Push commits |
| `git log --oneline --graph --all` | View history |

## Final Workflow

**Task → Branch → Code → Test → Commit → Push → Pull Request → Review → Merge → Update main**

All team members should follow this workflow to keep the repository clean, stable, and easy to maintain.
