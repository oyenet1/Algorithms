<<<<<<< HEAD
"""
Ok just to make things faster I made the program more compact.
The entire rsa cipher system is implemented from Python's rsa module

It works by generating public and private keys using the rsa.newkeys method
"""
#So first I import the rsa module
import rsa

"""A key of length of at least 512 would be provided by the user to set 
bounds for the generation of the key"""
=======

#So first I import the RSA module
import rsa

>>>>>>> 8f8df02afb562917b88db5c473abc9b1f441bdbd
keyLen = int(input('Enter the key length (greater than 512 but not too large): '))
if keyLen < 512:
	print('Keylength too small')
else:
	publicKey, privateKey = rsa.newkeys(keyLen)
<<<<<<< HEAD

"""Then I created a function dec that asks the user to decrypt an encrypted message"""
=======
>>>>>>> 8f8df02afb562917b88db5c473abc9b1f441bdbd
def dec(x):
	decx = input('\nEnter DEC to decrypt: ')
	if decx == 'DEC' or 'dec':
		print("Decrypted message: ", decMessage)
	else:
		decx = input('')


<<<<<<< HEAD
"""Now we will ask for a message to be encrypted"""

message = input("Enter a message to be decrypted: ")

"""The rsa.encrypt method is used to encrypt the message with the generated public key. 
But the message has to be encoded to byte-string before encryption"""

# Encoding with the encode method then encrypting
encMessage = rsa.encrypt(message.encode(),publicKey)

"""Finally, the original message and the decrypted message will be printed out"""
=======
message = input("Enter a message to be decrypted: ")


# Encoding with the encode method then encrypting
encMessage = rsa.encrypt(message.encode(), publicKey)

# """Finally, the original message and the decrypted message will be printed out"""
>>>>>>> 8f8df02afb562917b88db5c473abc9b1f441bdbd
print("\nThe original message: ", message)
print("Encrypted message: ", encMessage)
print("*Encrypted message can now be sent over an unsecure network.")

<<<<<<< HEAD
"""The encrypted message can be is decrypted with the ras.decrypt method and the private key"""
=======
# """The encrypted message can be is decrypted with the ras.decrypt method and the private key"""
>>>>>>> 8f8df02afb562917b88db5c473abc9b1f441bdbd
decMessage = rsa.decrypt(encMessage, privateKey).decode()
dec(message)