1, install homebrew using
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

2, install bash-completion
  brew install bash-completion
if [ -f $(brew --prefix)/etc/bash_completion ]; then
  . $(brew --prefix)/etc/bash_completion
fi
3, bash_profile vs bashrc http://www.joshstaiger.org/archives/2005/07/bash_profile_vs.html

To do this, add the following lines to .bash_profile:
if [ -f $HOME/.bashrc ]; then
   source $HOME/.bashrc
fi

4, brew install git-extras

5, https://www.alfredapp.com/ more advanced spot light search, default key is option + space
6, https://www.spectacleapp.com/
7, https://www.iterm2.com/downloads.html more advanced terminal
8, https://github.com/rupa/z
    Put something like this in your $HOME/.bashrc or $HOME/.zshrc:
              . /path/to/z.sh
    source $HOME/.bashrc
5, terminal tool https://github.com/robbyrussell/oh-my-zsh or https://github.com/sorin-ionescu/prezto

z command is a short cut key match for cd command,
How to install:
1. install z command
git clone https://github.com/rupa/z
2. Config then atom .bashrc
add  . $HOME/z/z.sh , and save
z command is available

Use bash completion:
after edit .bashrc and ~/.bash_profile, bash completion is still not avaiable,
check your git version by git --version, if it's not 2.8.3, then
brew install git   to update your git
if update not success
brew link --overwrite git
open a new tab, try git --version, you will find git version updated, and bash completion is available.
