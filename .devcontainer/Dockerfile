# start with deno base image
FROM denoland/deno:latest AS deno

# Configure a non-root user.
ARG USERNAME=deno
ARG USER_UID=1001
ARG USER_GID=$USER_UID

# Set the working directory.
WORKDIR /home/${USERNAME}/site

# Change the UID/GID of the existing deno user
RUN groupmod --gid $USER_GID $USERNAME \
    # modify the deno user id and group id
    && usermod --uid $USER_UID --gid $USER_GID $USERNAME \
    # Set the default shell to bash
    && usermod -s /bin/bash deno \
    # Set the ownership of the workspace to the new user.
    && chown -R $USER_UID:$USER_GID /home/$USERNAME \
    # [Optional] Add sudo support. Omit if you don't need to install software after connecting.
    && apt-get update \
    && apt-get install -y sudo \
    && echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME

# The port that your application listens to.
EXPOSE 3000

# Prefer not to run as root.
USER $USERNAME

# The CMD line in the Dockerfile determines parameters passed to Deno.
CMD ["deno", "run", "--allow-net", "main.ts"]


