export const fetchUserProfile = async (
  accessToken: any
): Promise<
  | undefined
  | {
      firstName: string;
      lastName: string;
      email: string;
      profileImage: string;
      facebookId: string;
      facebookLink: string;
    }
> => {
  try {
    const response = await fetch(
      `https://graph.facebook.com/me?fields=id,name,email,picture,first_name,last_name,link&access_token=${accessToken}`
    );
    const data = await response.json();
    return {
      firstName: data.first_name,
      lastName: data.last_name,
      email: data.email,
      profileImage: data.picture.data.url,
      facebookId: data.id,
      facebookLink: data.link,
    };
    // Save or use the user profile data as needed in your app
  } catch (error) {
    console.log('Error fetching user profile data:', error);
    return undefined;
  }
};
