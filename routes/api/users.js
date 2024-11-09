import dbConnect from '../../routes/api/users';
import User from '../../models/User';


export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    await dbConnect();

    const { firebaseUid, email, name, authProvider, photoURL } = req.body;

    // Check if user already exists
    let user = await User.findOne({ firebaseUid });
    
    if (user) {
      return res.status(200).json(user);
    }

    // Create new user
    user = await User.create({
      firebaseUid,
      email,
      name,
      authProvider,
      photoURL
    });

    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}