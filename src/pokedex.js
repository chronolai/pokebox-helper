const national = Array.from(Array(1008).keys()).map(idx => (idx + 1).toString().padStart(3, '0'));
// gen 1
const rgby = Array.from(Array(151).keys()).map(idx => (idx + 1).toString().padStart(3, '0'));
// gen 2
const gsc = ['152', '153', '154', '155', '156', '157', '158', '159', '160', '016', '017', '018', '021', '022', '163', '164', '019', '020', '161', '162', '172', '025', '026', '010', '011', '012', '013', '014', '015', '165', '166', '167', '168', '074', '075', '076', '041', '042', '169', '173', '035', '036', '174', '039', '040', '175', '176', '027', '028', '023', '024', '206', '179', '180', '181', '194', '195', '092', '093', '094', '201', '095', '208', '069', '070', '071', '187', '188', '189', '046', '047', '060', '061', '062', '186', '129', '130', '118', '119', '079', '080', '199', '043', '044', '045', '182', '096', '097', '063', '064', '065', '132', '204', '205', '029', '030', '031', '032', '033', '034', '193', '191', '192', '102', '103', '185', '202', '048', '049', '123', '212', '127', '214', '109', '110', '088', '089', '081', '082', '100', '101', '190', '209', '210', '037', '038', '058', '059', '234', '183', '184', '050', '051', '056', '057', '052', '053', '054', '055', '066', '067', '068', '236', '106', '107', '237', '203', '128', '241', '240', '126', '238', '124', '239', '125', '122', '235', '083', '177', '178', '211', '072', '073', '098', '099', '213', '120', '121', '090', '091', '222', '223', '224', '170', '171', '086', '087', '108', '114', '133', '134', '135', '136', '196', '197', '116', '117', '230', '207', '225', '220', '221', '216', '217', '231', '232', '226', '227', '084', '085', '077', '078', '104', '105', '115', '111', '112', '198', '228', '229', '218', '219', '215', '200', '137', '233', '113', '242', '131', '138', '139', '140', '141', '142', '143', '001', '002', '003', '004', '005', '006', '007', '008', '009', '144', '145', '146', '243', '244', '245', '147', '148', '149', '246', '247', '248', '249', '250', '150', '151', '251'];
// gen 3
const rse = ['252', '253', '254', '255', '256', '257', '258', '259', '260', '261', '262', '263', '264', '265', '266', '267', '268', '269', '270', '271', '272', '273', '274', '275', '276', '277', '278', '279', '280', '281', '282', '283', '284', '285', '286', '287', '288', '289', '063', '064', '065', '290', '291', '292', '293', '294', '295', '296', '297', '118', '119', '129', '130', '298', '183', '184', '074', '075', '076', '299', '300', '301', '041', '042', '169', '072', '073', '302', '303', '304', '305', '306', '066', '067', '068', '307', '308', '309', '310', '311', '312', '081', '082', '100', '101', '313', '314', '043', '044', '045', '182', '084', '085', '315', '316', '317', '318', '319', '320', '321', '322', '323', '218', '219', '324', '088', '089', '109', '110', '325', '326', '027', '028', '327', '227', '328', '329', '330', '331', '332', '333', '334', '335', '336', '337', '338', '339', '340', '341', '342', '343', '344', '345', '346', '347', '348', '174', '039', '040', '349', '350', '351', '120', '121', '352', '353', '354', '355', '356', '357', '358', '359', '037', '038', '172', '025', '026', '054', '055', '360', '202', '177', '178', '203', '231', '232', '127', '214', '111', '112', '361', '362', '363', '364', '365', '366', '367', '368', '369', '222', '170', '171', '370', '116', '117', '230', '371', '372', '373', '374', '375', '376', '377', '378', '379', '380', '381', '382', '383', '384', '385', '386'];
const frlg = [...rgby];
// gen 4
const dp = ['387', '388', '389', '390', '391', '392', '393', '394', '395', '396', '397', '398', '399', '400', '401', '402', '403', '404', '405', '063', '064', '065', '129', '130', '406', '315', '407', '041', '042', '169', '074', '075', '076', '095', '208', '408', '409', '410', '411', '066', '067', '068', '054', '055', '412', '413', '414', '265', '266', '267', '268', '269', '415', '416', '417', '418', '419', '420', '421', '422', '423', '214', '190', '424', '425', '426', '427', '428', '092', '093', '094', '200', '429', '198', '430', '431', '432', '118', '119', '339', '340', '433', '358', '434', '435', '307', '308', '436', '437', '077', '078', '438', '185', '439', '122', '440', '113', '242', '173', '035', '036', '441', '172', '025', '026', '163', '164', '442', '443', '444', '445', '446', '143', '201', '447', '448', '194', '195', '278', '279', '203', '449', '450', '298', '183', '184', '451', '452', '453', '454', '455', '223', '224', '456', '457', '072', '073', '349', '350', '458', '226', '459', '460', '215', '461', '480', '481', '482', '483', '484', '490'];
const pt = [...dp, '479', '207', '472', '299', '476', '280', '281', '282', '475', '108', '463', '133', '134', '135', '136', '196', '197', '470', '471', '333', '334', '175', '176', '468', '228', '229', '081', '082', '462', '114', '465', '193', '469', '357', '111', '112', '464', '355', '356', '477', '137', '233', '474', '123', '212', '239', '125', '466', '240', '126', '467', '220', '221', '473', '361', '362', '478', '359', '487'];
const hgss = ['152', '153', '154', '155', '156', '157', '158', '159', '160', '016', '017', '018', '021', '022', '163', '164', '019', '020', '161', '162', '172', '025', '026', '010', '011', '012', '013', '014', '015', '165', '166', '167', '168', '074', '075', '076', '041', '042', '169', '173', '035', '036', '174', '039', '040', '175', '176', '027', '028', '023', '024', '206', '179', '180', '181', '194', '195', '092', '093', '094', '201', '095', '208', '069', '070', '071', '187', '188', '189', '046', '047', '060', '061', '062', '186', '129', '130', '118', '119', '079', '080', '199', '043', '044', '045', '182', '096', '097', '063', '064', '065', '132', '204', '205', '029', '030', '031', '032', '033', '034', '193', '469', '191', '192', '102', '103', '185', '202', '048', '049', '123', '212', '127', '214', '109', '110', '088', '089', '081', '082', '100', '101', '190', '424', '209', '210', '037', '038', '058', '059', '234', '183', '184', '050', '051', '056', '057', '052', '053', '054', '055', '066', '067', '068', '236', '106', '107', '237', '203', '128', '241', '240', '126', '238', '124', '239', '125', '122', '235', '083', '177', '178', '211', '072', '073', '098', '099', '213', '120', '121', '090', '091', '222', '223', '224', '170', '171', '086', '087', '108', '463', '114', '465', '133', '134', '135', '136', '196', '197', '116', '117', '230', '207', '225', '220', '221', '473', '216', '217', '231', '232', '226', '227', '084', '085', '077', '078', '104', '105', '115', '111', '112', '198', '228', '229', '218', '219', '215', '200', '137', '233', '113', '242', '131', '138', '139', '140', '141', '142', '143', '001', '002', '003', '004', '005', '006', '007', '008', '009', '144', '145', '146', '243', '244', '245', '147', '148', '149', '246', '247', '248', '249', '250', '150', '151', '251'];
// gen 5
const bw = ['494', '495', '496', '497', '498', '499', '500', '501', '502', '503', '504', '505', '506', '507', '508', '509', '510', '511', '512', '513', '514', '515', '516', '517', '518', '519', '520', '521', '522', '523', '524', '525', '526', '527', '528', '529', '530', '531', '532', '533', '534', '535', '536', '537', '538', '539', '540', '541', '542', '543', '544', '545', '546', '547', '548', '549', '550', '551', '552', '553', '554', '555', '556', '557', '558', '559', '560', '561', '562', '563', '564', '565', '566', '567', '568', '569', '570', '571', '572', '573', '574', '575', '576', '577', '578', '579', '580', '581', '582', '583', '584', '585', '586', '587', '588', '589', '590', '591', '592', '593', '594', '595', '596', '597', '598', '599', '600', '601', '602', '603', '604', '605', '606', '607', '608', '609', '610', '611', '612', '613', '614', '615', '616', '617', '618', '619', '620', '621', '622', '623', '624', '625', '626', '627', '628', '629', '630', '631', '632', '633', '634', '635', '636', '637', '638', '639', '640', '641', '642', '643', '644', '645', '646', '647', '648', '649'];
const b2w2 = ['494', '495', '496', '497', '498', '499', '500', '501', '502', '503', '504', '505', '509', '510', '519', '520', '521', '540', '541', '542', '191', '192', '506', '507', '508', '179', '180', '181', '054', '055', '298', '183', '184', '447', '448', '206', '531', '511', '512', '513', '514', '515', '516', '543', '544', '545', '109', '110', '081', '082', '462', '058', '059', '240', '126', '467', '239', '125', '466', '019', '020', '041', '042', '169', '088', '089', '527', '528', '524', '525', '526', '095', '208', '532', '533', '534', '529', '530', '300', '301', '427', '428', '546', '547', '548', '549', '517', '518', '173', '035', '036', '133', '134', '135', '136', '196', '197', '470', '471', '551', '552', '553', '554', '555', '550', '568', '569', '572', '573', '627', '628', '629', '630', '027', '028', '557', '558', '559', '560', '556', '561', '328', '329', '330', '562', '563', '564', '565', '566', '567', '599', '600', '601', '406', '315', '407', '574', '575', '576', '577', '578', '579', '415', '416', '587', '214', '127', '522', '523', '418', '419', '570', '571', '580', '581', '588', '589', '616', '617', '585', '586', '590', '591', '351', '299', '476', '304', '305', '306', '343', '344', '636', '637', '595', '596', '597', '598', '602', '603', '604', '592', '593', '594', '610', '611', '612', '335', '336', '605', '606', '607', '608', '609', '631', '632', '613', '614', '615', '641', '642', '645', '451', '452', '227', '322', '323', '325', '326', '425', '426', '353', '354', '278', '279', '337', '338', '359', '114', '465', '619', '620', '207', '472', '624', '625', '638', '639', '640', '535', '536', '537', '618', '213', '458', '226', '223', '224', '222', '120', '121', '320', '321', '131', '363', '364', '365', '333', '334', '037', '038', '436', '437', '215', '461', '225', '582', '583', '584', '220', '221', '473', '132', '374', '375', '376', '086', '087', '538', '539', '626', '621', '622', '623', '633', '634', '635', '287', '288', '289', '341', '342', '174', '039', '040', '108', '463', '193', '469', '357', '455', '453', '454', '246', '247', '248', '643', '644', '646', '647', '648', '649'];
// gen 6
const xy_coastal = ['650', '651', '652', '653', '654', '655', '656', '657', '658', '659', '660', '263', '264', '661', '662', '663', '016', '017', '018', '664', '665', '666', '010', '011', '012', '013', '014', '015', '511', '512', '513', '514', '515', '516', '172', '025', '026', '399', '400', '206', '298', '183', '184', '412', '413', '414', '283', '284', '129', '130', '341', '342', '118', '119', '318', '319', '667', '668', '054', '055', '083', '447', '448', '280', '281', '282', '475', '669', '670', '671', '406', '315', '407', '165', '166', '415', '416', '300', '301', '001', '002', '003', '004', '005', '006', '007', '008', '009', '672', '673', '674', '675', '676', '084', '085', '311', '312', '316', '317', '559', '560', '063', '064', '065', '043', '044', '045', '182', '161', '162', '290', '291', '292', '677', '678', '352', '679', '680', '681', '543', '544', '545', '531', '235', '453', '454', '580', '581', '682', '683', '684', '685', '313', '314', '187', '188', '189', '446', '143', '293', '294', '295', '307', '308', '041', '042', '169', '610', '611', '612', '719', '720', '721'];
const xy_central = ['425', '426', '619', '620', '335', '336', '325', '326', '359', '686', '687', '337', '338', '371', '372', '373', '278', '279', '276', '277', '688', '689', '557', '558', '072', '073', '320', '321', '370', '690', '691', '692', '693', '120', '121', '090', '091', '211', '116', '117', '230', '369', '551', '552', '553', '694', '695', '449', '450', '111', '112', '464', '095', '208', '527', '528', '066', '067', '068', '104', '105', '115', '303', '696', '697', '698', '699', '142', '597', '598', '209', '210', '309', '310', '228', '229', '133', '134', '135', '136', '196', '197', '470', '471', '700', '587', '193', '469', '701', '561', '622', '623', '299', '476', '296', '297', '538', '539', '396', '397', '398', '434', '435', '029', '030', '031', '032', '033', '034', '702', '433', '358', '439', '122', '577', '578', '579', '360', '202', '524', '525', '526', '302', '703', '128', '241', '179', '180', '181', '127', '214', '417', '079', '080', '199', '102', '103', '441', '458', '226', '366', '367', '368', '223', '224', '222', '170', '171', '594', '131', '144', '145', '146'];
const xy_mountain = ['050', '051', '328', '329', '330', '443', '444', '445', '074', '075', '076', '218', '219', '213', '451', '452', '194', '195', '704', '705', '706', '588', '589', '616', '617', '069', '070', '071', '455', '092', '093', '094', '060', '061', '062', '186', '023', '024', '618', '339', '340', '509', '510', '261', '262', '504', '505', '624', '625', '707', '198', '430', '590', '591', '270', '271', '272', '418', '419', '550', '708', '709', '710', '711', '607', '608', '609', '479', '081', '082', '462', '100', '101', '568', '569', '220', '221', '473', '712', '713', '613', '614', '238', '124', '582', '583', '584', '459', '460', '225', '215', '461', '532', '533', '534', '324', '027', '028', '304', '305', '306', '246', '247', '248', '631', '632', '167', '168', '021', '022', '615', '227', '714', '715', '207', '472', '163', '164', '174', '039', '040', '353', '354', '570', '571', '574', '575', '576', '438', '185', '327', '216', '217', '108', '463', '123', '212', '132', '333', '334', '621', '633', '634', '635', '147', '148', '149', '716', '717', '718', '150'];
const oras = ['252', '253', '254', '255', '256', '257', '258', '259', '260', '261', '262', '263', '264', '265', '266', '267', '268', '269', '270', '271', '272', '273', '274', '275', '276', '277', '278', '279', '280', '281', '282', '475', '283', '284', '285', '286', '287', '288', '289', '063', '064', '065', '290', '291', '292', '293', '294', '295', '296', '297', '118', '119', '129', '130', '298', '183', '184', '074', '075', '076', '299', '476', '300', '301', '041', '042', '169', '072', '073', '302', '303', '304', '305', '306', '066', '067', '068', '307', '308', '309', '310', '311', '312', '081', '082', '462', '100', '101', '313', '314', '043', '044', '045', '182', '084', '085', '406', '315', '407', '316', '317', '318', '319', '320', '321', '322', '323', '218', '219', '324', '088', '089', '109', '110', '325', '326', '027', '028', '327', '227', '328', '329', '330', '331', '332', '333', '334', '335', '336', '337', '338', '339', '340', '341', '342', '343', '344', '345', '346', '347', '348', '174', '039', '040', '349', '350', '351', '120', '121', '352', '353', '354', '355', '356', '477', '357', '433', '358', '359', '037', '038', '172', '025', '026', '054', '055', '360', '202', '177', '178', '203', '231', '232', '127', '214', '111', '112', '464', '361', '362', '478', '363', '364', '365', '366', '367', '368', '369', '222', '170', '171', '370', '116', '117', '230', '371', '372', '373', '374', '375', '376', '377', '378', '379', '380', '381', '382', '383', '384', '385', '386'];
// gen 7
const sm = ['722', '723', '724', '725', '726', '727', '728', '729', '730', '731', '732', '733', '734', '735', '019', '020', '010', '011', '012', '165', '166', '167', '168', '172', '025', '026', '736', '737', '738', '438', '185', '440', '113', '242', '446', '143', '079', '080', '199', '278', '279', '063', '064', '065', '052', '053', '081', '082', '462', '088', '089', '058', '059', '096', '097', '296', '297', '235', '739', '740', '092', '093', '094', '425', '426', '200', '429', '041', '042', '169', '050', '051', '021', '022', '627', '628', '629', '630', '056', '057', '225', '741', '742', '743', '548', '549', '546', '547', '054', '055', '129', '130', '339', '340', '066', '067', '068', '524', '525', '526', '703', '302', '744', '745', '327', '072', '073', '456', '457', '746', '370', '222', '747', '748', '090', '091', '371', '372', '373', '506', '507', '508', '133', '134', '135', '136', '196', '197', '470', '471', '700', '749', '750', '174', '039', '040', '128', '241', '283', '284', '751', '752', '753', '754', '755', '756', '046', '047', '060', '061', '062', '186', '118', '119', '349', '350', '594', '661', '662', '663', '757', '758', '104', '105', '115', '240', '126', '467', '759', '760', '761', '762', '763', '764', '127', '765', '766', '704', '705', '706', '351', '767', '768', '120', '121', '769', '770', '408', '409', '410', '411', '566', '567', '564', '565', '708', '709', '299', '476', '771', '170', '171', '772', '773', '718', '568', '569', '227', '132', '173', '035', '036', '774', '374', '375', '376', '137', '233', '474', '674', '675', '775', '324', '776', '777', '239', '125', '466', '074', '075', '076', '551', '552', '553', '328', '329', '330', '443', '444', '445', '707', '778', '779', '780', '359', '361', '362', '478', '215', '461', '027', '028', '037', '038', '582', '583', '584', '209', '210', '422', '423', '369', '781', '318', '319', '320', '321', '131', '102', '103', '782', '783', '784', '587', '123', '212', '198', '430', '447', '448', '147', '148', '149', '142', '785', '786', '787', '788', '789', '790', '791', '792', '793', '794', '795', '796', '797', '798', '799', '800', '801', '802'];
const sm_melemele = ['722', '723', '724', '725', '726', '727', '728', '729', '730', '731', '732', '733', '734', '735', '019', '020', '010', '011', '012', '165', '166', '167', '168', '172', '025', '026', '736', '737', '738', '438', '185', '440', '113', '242', '446', '143', '079', '080', '199', '278', '279', '063', '064', '065', '052', '053', '081', '082', '462', '088', '089', '058', '059', '096', '097', '296', '297', '235', '739', '740', '092', '093', '094', '425', '426', '200', '429', '041', '042', '169', '050', '051', '021', '022', '627', '628', '629', '630', '056', '057', '225', '741', '742', '743', '548', '549', '546', '547', '054', '055', '129', '130', '339', '340', '066', '067', '068', '524', '525', '526', '703', '302', '744', '745', '327', '072', '073', '456', '457', '746', '370', '222', '747', '748', '090', '091', '371', '372', '373', '785'];
const sm_akala = ['731', '732', '733', '734', '735', '019', '020', '010', '011', '012', '736', '737', '738', '438', '185', '440', '113', '242', '278', '279', '739', '740', '092', '093', '094', '041', '042', '169', '050', '051', '741', '054', '055', '129', '130', '339', '340', '072', '073', '456', '457', '746', '370', '222', '747', '748', '506', '507', '508', '133', '134', '135', '136', '196', '197', '470', '471', '700', '749', '750', '174', '039', '040', '128', '241', '283', '284', '751', '752', '753', '754', '755', '756', '046', '047', '060', '061', '062', '186', '118', '119', '349', '350', '594', '661', '662', '663', '757', '758', '104', '105', '115', '240', '126', '467', '759', '760', '761', '762', '763', '764', '127', '765', '766', '704', '705', '706', '351', '767', '768', '120', '121', '769', '770', '408', '409', '410', '411', '566', '567', '564', '565', '708', '709', '299', '476', '771', '170', '171', '786'];
const sm_ulaula = ['731', '732', '733', '734', '735', '019', '020', '165', '166', '167', '168', '736', '737', '738', '440', '113', '242', '079', '080', '199', '278', '279', '052', '053', '081', '082', '462', '088', '089', '739', '740', '092', '093', '094', '041', '042', '169', '050', '051', '021', '022', '741', '742', '743', '548', '549', '546', '547', '054', '055', '129', '130', '072', '073', '456', '457', '746', '749', '750', '283', '284', '751', '752', '755', '756', '046', '047', '060', '061', '062', '186', '118', '119', '704', '705', '706', '351', '568', '569', '227', '132', '173', '035', '036', '774', '374', '375', '376', '137', '233', '474', '674', '675', '775', '324', '776', '777', '239', '125', '466', '074', '075', '076', '551', '552', '553', '328', '329', '330', '443', '444', '445', '707', '778', '779', '780', '359', '361', '362', '478', '215', '461', '027', '028', '037', '038', '582', '583', '584', '787'];
const sm_poni = ['731', '732', '733', '734', '735', '019', '020', '440', '113', '242', '278', '279', '096', '097', '296', '297', '739', '740', '041', '042', '169', '050', '051', '021', '022', '627', '628', '629', '630', '056', '057', '741', '742', '743', '548', '549', '546', '547', '054', '055', '129', '130', '339', '340', '066', '067', '068', '524', '525', '526', '703', '302', '744', '745', '072', '073', '456', '457', '749', '750', '128', '241', '759', '760', '127', '704', '705', '706', '351', '767', '768', '227', '209', '210', '422', '423', '369', '781', '318', '319', '320', '321', '131', '102', '103', '782', '783', '784', '587', '123', '212', '198', '430', '447', '448', '147', '148', '149', '142', '788'];
const usum = ['722', '723', '724', '725', '726', '727', '728', '729', '730', '731', '732', '733', '734', '735', '019', '020', '010', '011', '012', '165', '166', '167', '168', '427', '428', '686', '687', '570', '571', '676', '172', '025', '026', '736', '737', '738', '438', '185', '440', '113', '242', '446', '143', '079', '080', '199', '278', '279', '063', '064', '065', '052', '053', '081', '082', '462', '088', '089', '439', '122', '023', '024', '206', '058', '059', '096', '097', '296', '297', '235', '739', '740', '092', '093', '094', '425', '426', '198', '430', '041', '042', '169', '714', '715', '050', '051', '021', '022', '627', '628', '629', '630', '056', '057', '225', '701', '741', '742', '743', '669', '670', '671', '548', '549', '546', '547', '054', '055', '238', '124', '129', '130', '339', '340', '086', '087', '066', '067', '068', '524', '525', '526', '703', '302', '303', '744', '745', '327', '072', '073', '456', '457', '746', '370', '222', '747', '748', '090', '091', '366', '367', '368', '223', '224', '458', '226', '371', '372', '373', '506', '507', '508', '133', '134', '135', '136', '196', '197', '470', '471', '700', '179', '180', '181', '749', '750', '174', '039', '040', '128', '241', '283', '284', '751', '752', '753', '754', '755', '756', '046', '047', '060', '061', '062', '186', '118', '119', '550', '349', '350', '594', '661', '662', '663', '757', '758', '104', '105', '115', '240', '126', '467', '636', '637', '759', '760', '761', '762', '763', '764', '127', '163', '164', '352', '765', '766', '704', '705', '706', '351', '767', '768', '120', '121', '769', '770', '138', '139', '140', '141', '345', '346', '347', '348', '408', '409', '410', '411', '566', '567', '564', '565', '696', '697', '698', '699', '246', '247', '248', '708', '709', '177', '178', '299', '476', '771', '170', '171', '772', '773', '803', '804', '718', '568', '569', '572', '573', '204', '205', '227', '132', '173', '035', '036', '605', '606', '774', '374', '375', '376', '137', '233', '474', '674', '675', '775', '324', '776', '228', '229', '702', '777', '309', '310', '239', '125', '466', '074', '075', '076', '551', '552', '553', '328', '329', '330', '443', '444', '445', '343', '344', '622', '623', '707', '778', '353', '354', '592', '593', '779', '780', '359', '361', '362', '478', '215', '461', '027', '028', '037', '038', '582', '583', '584', '559', '560', '624', '625', '209', '210', '422', '423', '369', '781', '318', '319', '690', '691', '692', '693', '320', '321', '131', '357', '102', '103', '341', '342', '619', '620', '782', '783', '784', '587', '123', '212', '214', '190', '424', '667', '668', '200', '429', '621', '108', '463', '447', '448', '147', '148', '149', '142', '785', '786', '787', '788', '789', '790', '791', '792', '793', '805', '806', '794', '795', '796', '797', '798', '799', '800', '801', '802', '807'];
const usum_melemele = ['722', '723', '724', '725', '726', '727', '728', '729', '730', '731', '732', '733', '734', '735', '019', '020', '010', '011', '012', '165', '166', '167', '168', '427', '428', '686', '687', '570', '571', '676', '172', '025', '026', '736', '737', '738', '438', '185', '440', '113', '242', '446', '143', '079', '080', '199', '278', '279', '063', '064', '065', '052', '053', '081', '082', '462', '088', '089', '439', '122', '023', '024', '206', '058', '059', '096', '097', '296', '297', '235', '739', '740', '092', '093', '094', '425', '426', '198', '430', '041', '042', '169', '714', '715', '050', '051', '021', '022', '627', '628', '629', '630', '056', '057', '225', '701', '741', '742', '743', '669', '670', '671', '548', '549', '546', '547', '054', '055', '238', '124', '129', '130', '339', '340', '086', '087', '066', '067', '068', '524', '525', '526', '703', '302', '303', '744', '745', '327', '072', '073', '456', '457', '746', '370', '222', '747', '748', '090', '091', '366', '367', '368', '223', '224', '458', '226', '371', '372', '373', '785'];
const usum_akala = ['731', '732', '733', '734', '735', '019', '020', '010', '011', '012', '736', '737', '738', '438', '185', '440', '113', '242', '278', '279', '739', '740', '092', '093', '094', '041', '042', '169', '050', '051', '741', '054', '055', '129', '130', '339', '340', '072', '073', '456', '457', '746', '370', '222', '747', '748', '223', '224', '458', '226', '506', '507', '508', '133', '134', '135', '136', '196', '197', '470', '471', '700', '179', '180', '181', '749', '750', '174', '039', '040', '128', '241', '283', '284', '751', '752', '753', '754', '755', '756', '046', '047', '060', '061', '062', '186', '118', '119', '550', '349', '350', '594', '661', '662', '663', '757', '758', '104', '105', '115', '240', '126', '467', '636', '637', '759', '760', '761', '762', '763', '764', '127', '163', '164', '352', '765', '766', '704', '705', '706', '351', '767', '768', '120', '121', '769', '770', '138', '139', '140', '141', '345', '346', '347', '348', '408', '409', '410', '411', '566', '567', '564', '565', '696', '697', '698', '699', '246', '247', '248', '708', '709', '177', '178', '299', '476', '771', '170', '171', '786'];
const usum_ulaula = ['731', '732', '733', '734', '735', '019', '020', '165', '166', '167', '168', '736', '737', '738', '440', '113', '242', '079', '080', '199', '278', '279', '052', '053', '081', '082', '462', '088', '089', '739', '740', '092', '093', '094', '041', '042', '169', '050', '051', '021', '022', '741', '742', '743', '669', '670', '671', '548', '549', '546', '547', '054', '055', '129', '130', '072', '073', '456', '457', '746', '366', '367', '368', '749', '750', '283', '284', '751', '752', '755', '756', '046', '047', '060', '061', '062', '186', '118', '119', '550', '704', '705', '706', '351', '568', '569', '572', '573', '204', '205', '227', '132', '173', '035', '036', '605', '606', '774', '374', '375', '376', '137', '233', '474', '674', '675', '775', '324', '776', '228', '229', '702', '777', '309', '310', '239', '125', '466', '074', '075', '076', '551', '552', '553', '328', '329', '330', '443', '444', '445', '343', '344', '622', '623', '707', '778', '353', '354', '592', '593', '779', '780', '359', '361', '362', '478', '215', '461', '027', '028', '037', '038', '582', '583', '584', '559', '560', '624', '625', '787'];
const usum_poni = ['731', '732', '733', '734', '735', '019', '020', '427', '428', '686', '687', '570', '571', '676', '440', '113', '242', '278', '279', '096', '097', '296', '297', '739', '740', '041', '042', '169', '714', '715', '050', '051', '021', '022', '627', '628', '629', '630', '056', '057', '741', '742', '743', '669', '670', '671', '548', '549', '546', '547', '054', '055', '129', '130', '339', '340', '066', '067', '068', '524', '525', '526', '703', '302', '744', '745', '072', '073', '456', '457', '749', '750', '128', '241', '550', '759', '760', '127', '704', '705', '706', '351', '767', '768', '227', '209', '210', '422', '423', '369', '781', '318', '319', '690', '691', '692', '693', '320', '321', '131', '357', '102', '103', '341', '342', '619', '620', '782', '783', '784', '587', '123', '212', '214', '190', '424', '667', '668', '200', '429', '621', '108', '463', '447', '448', '147', '148', '149', '142', '788'];
const lgpe = [...rgby, '808', '809'];
// gen 8
const swsh = ['810', '811', '812', '813', '814', '815', '816', '817', '818', '824', '825', '826', '010', '011', '012', '736', '737', '738', '163', '164', '821', '822', '823', '819', '820', '519', '520', '521', '827', '828', '263', '264', '862', '831', '832', '270', '271', '272', '273', '274', '275', '833', '834', '509', '510', '835', '836', '659', '660', '572', '573', '761', '762', '763', '043', '044', '045', '182', '406', '315', '407', '278', '279', '595', '596', '309', '310', '037', '038', '058', '059', '582', '583', '584', '220', '221', '473', '225', '361', '362', '478', '343', '344', '749', '750', '557', '558', '622', '623', '517', '518', '177', '178', '759', '760', '459', '460', '098', '099', '194', '195', '341', '342', '290', '291', '292', '236', '106', '107', '237', '674', '675', '599', '600', '601', '415', '416', '436', '437', '280', '281', '282', '475', '425', '426', '829', '830', '420', '421', '434', '435', '535', '536', '537', '355', '356', '477', '066', '067', '068', '092', '093', '094', '129', '130', '118', '119', '223', '224', '090', '091', '349', '350', '550', '746', '771', '568', '569', '850', '851', '837', '838', '839', '050', '051', '529', '530', '524', '525', '526', '532', '533', '534', '527', '528', '714', '715', '095', '208', '846', '847', '052', '863', '053', '868', '869', '742', '743', '597', '598', '710', '711', '172', '025', '026', '133', '134', '135', '136', '196', '197', '470', '471', '700', '840', '841', '842', '677', '678', '684', '685', '682', '683', '751', '752', '360', '202', '083', '865', '170', '171', '453', '454', '559', '560', '618', '213', '339', '340', '422', '423', '767', '768', '688', '689', '222', '864', '859', '860', '861', '856', '857', '858', '757', '758', '624', '625', '538', '539', '109', '110', '438', '185', '173', '035', '036', '175', '176', '468', '446', '143', '546', '547', '111', '112', '464', '574', '575', '576', '577', '578', '579', '588', '589', '616', '617', '605', '606', '613', '614', '627', '628', '629', '630', '451', '452', '607', '608', '609', '686', '687', '215', '461', '302', '303', '556', '561', '447', '448', '324', '778', '878', '879', '211', '592', '593', '747', '748', '845', '848', '849', '843', '844', '449', '450', '632', '631', '694', '695', '701', '328', '329', '330', '610', '611', '612', '562', '867', '563', '679', '680', '681', '077', '078', '854', '855', '876', '708', '709', '755', '756', '765', '766', '877', '870', '780', '776', '777', '872', '873', '852', '853', '871', '458', '226', '320', '321', '712', '713', '781', '131', '337', '338', '439', '122', '866', '554', '555', '874', '875', '884', '479', '132', '880', '881', '882', '883', '004', '005', '006', '772', '773', '246', '247', '248', '633', '634', '635', '704', '705', '706', '782', '783', '784', '885', '886', '887', '888', '889', '890'];
const swsh_armor = ['079', '080', '199', '427', '428', '440', '113', '242', '819', '820', '174', '039', '040', '824', '825', '826', '753', '754', '840', '841', '842', '661', '662', '663', '403', '404', '405', '707', '624', '625', '063', '064', '065', '280', '281', '282', '475', '098', '099', '072', '073', '129', '130', '223', '224', '458', '226', '278', '279', '451', '452', '206', '626', '108', '463', '833', '834', '194', '195', '704', '705', '706', '621', '616', '617', '588', '589', '001', '002', '003', '007', '008', '009', '543', '544', '545', '590', '591', '764', '114', '465', '453', '454', '172', '025', '026', '570', '571', '765', '766', '341', '342', '845', '118', '119', '846', '847', '120', '121', '891', '892', '587', '702', '877', '081', '082', '462', '686', '687', '746', '318', '319', '506', '507', '508', '128', '241', '123', '212', '127', '214', '557', '558', '767', '768', '871', '747', '748', '852', '853', '090', '091', '769', '770', '425', '426', '339', '340', '298', '183', '184', '060', '061', '062', '186', '054', '055', '293', '294', '295', '527', '528', '227', '524', '525', '526', '744', '745', '757', '758', '559', '560', '619', '620', '782', '783', '784', '027', '028', '104', '105', '115', '324', '843', '844', '551', '552', '553', '627', '628', '629', '630', '111', '112', '464', '636', '637', '170', '171', '320', '321', '592', '593', '690', '691', '692', '693', '116', '117', '230', '548', '549', '415', '416', '102', '103', '132', '137', '233', '474', '893'];
const swsh_crown = ['872', '873', '831', '832', '819', '820', '220', '221', '473', '439', '122', '866', '238', '124', '239', '125', '466', '240', '126', '467', '531', '582', '583', '584', '361', '362', '478', '215', '461', '615', '459', '460', '708', '709', '333', '334', '859', '860', '861', '856', '857', '858', '173', '035', '036', '778', '442', '607', '608', '609', '574', '575', '576', '577', '578', '579', '532', '533', '534', '339', '340', '129', '130', '550', '029', '030', '031', '032', '033', '034', '263', '264', '862', '133', '134', '135', '136', '196', '197', '470', '471', '700', '696', '697', '698', '699', '436', '437', '874', '875', '751', '752', '595', '596', '588', '589', '616', '617', '850', '851', '632', '631', '554', '555', '077', '078', '359', '878', '879', '885', '886', '887', '371', '372', '373', '443', '444', '445', '621', '225', '613', '614', '138', '139', '140', '141', '142', '703', '374', '375', '376', '854', '855', '447', '448', '633', '634', '635', '246', '247', '248', '712', '713', '041', '042', '169', '564', '565', '566', '567', '343', '344', '622', '623', '835', '836', '877', '871', '363', '364', '365', '781', '821', '822', '823', '829', '830', '546', '547', '213', '876', '446', '143', '302', '303', '837', '838', '839', '597', '598', '714', '715', '345', '346', '347', '348', '369', '349', '350', '131', '304', '305', '306', '147', '148', '149', '377', '378', '379', '894', '895', '144', '145', '146', '638', '639', '640', '896', '897', '898'];
const arceus = ['722', '723', '724', '155', '156', '157', '501', '502', '503', '399', '400', '396', '397', '398', '403', '404', '405', '265', '266', '267', '268', '269', '077', '078', '133', '134', '135', '136', '196', '197', '470', '471', '700', '041', '042', '169', '425', '426', '401', '402', '418', '419', '412', '413', '414', '074', '075', '076', '234', '899', '446', '143', '046', '047', '172', '025', '026', '063', '064', '065', '390', '391', '392', '427', '428', '420', '421', '054', '055', '415', '416', '123', '900', '212', '214', '439', '122', '190', '424', '129', '130', '422', '423', '211', '904', '440', '113', '242', '406', '315', '407', '455', '548', '549', '114', '465', '339', '340', '453', '454', '280', '281', '282', '475', '193', '469', '449', '450', '417', '434', '435', '216', '217', '901', '704', '705', '706', '095', '208', '111', '112', '464', '438', '185', '108', '463', '175', '176', '468', '387', '388', '389', '137', '233', '474', '092', '093', '094', '442', '198', '430', '201', '363', '364', '365', '223', '224', '451', '452', '058', '059', '431', '432', '066', '067', '068', '441', '355', '356', '477', '393', '394', '395', '458', '226', '550', '902', '037', '038', '072', '073', '456', '457', '240', '126', '467', '081', '082', '462', '436', '437', '239', '125', '466', '207', '472', '443', '444', '445', '299', '476', '100', '101', '479', '433', '358', '200', '429', '173', '035', '036', '215', '903', '461', '361', '362', '478', '408', '409', '410', '411', '220', '221', '473', '712', '713', '459', '460', '570', '571', '627', '628', '447', '448', '480', '481', '482', '485', '486', '488', '641', '642', '645', '905', '483', '484', '487', '493', '489', '490', '492', '491'];

// gen 9
const sv = ['906', '907', '908', '909', '910', '911', '912', '913', '914', '915', '916', '917', '918', '919', '920', '187', '188', '189', '661', '662', '663', '921', '922', '923', '228', '229', '734', '735', '819', '820', '191', '192', '401', '402', '664', '665', '666', '415', '416', '821', '822', '823', '440', '113', '242', '298', '183', '184', '283', '284', '418', '419', '194', '980', '054', '055', '833', '834', '174', '039', '040', '280', '281', '282', '475', '096', '097', '092', '093', '094', '924', '925', '172', '025', '026', '926', '927', '287', '288', '289', '761', '762', '763', '928', '929', '930', '438', '185', '744', '745', '837', '838', '839', '403', '404', '405', '396', '397', '398', '741', '179', '180', '181', '548', '549', '285', '286', '840', '841', '842', '325', '326', '931', '200', '429', '296', '297', '739', '740', '757', '758', '231', '232', '878', '879', '443', '444', '445', '932', '933', '934', '278', '279', '129', '130', '846', '847', '550', '316', '317', '052', '053', '425', '426', '669', '670', '671', '050', '051', '324', '322', '323', '436', '437', '610', '611', '612', '056', '057', '979', '307', '308', '447', '448', '935', '936', '937', '339', '340', '938', '939', '704', '705', '706', '453', '454', '940', '941', '133', '134', '135', '136', '196', '197', '470', '471', '700', '206', '982', '585', '586', '203', '981', '088', '089', '942', '943', '848', '849', '702', '417', '944', '945', '234', '590', '591', '100', '101', '081', '082', '462', '132', '058', '059', '216', '217', '335', '336', '333', '334', '672', '673', '128', '667', '668', '434', '435', '570', '571', '215', '461', '198', '430', '574', '575', '576', '854', '855', '778', '707', '876', '946', '947', '948', '949', '357', '753', '754', '950', '951', '952', '331', '332', '953', '954', '048', '049', '204', '205', '123', '212', '214', '955', '956', '449', '450', '551', '552', '553', '843', '844', '749', '750', '636', '637', '371', '372', '373', '957', '958', '959', '856', '857', '858', '859', '860', '861', '960', '961', '962', '963', '964', '965', '966', '967', '968', '302', '353', '354', '870', '701', '442', '714', '715', '885', '886', '887', '969', '970', '479', '971', '972', '765', '766', '775', '246', '247', '248', '874', '875', '871', '769', '770', '079', '080', '199', '422', '423', '090', '091', '211', '370', '456', '457', '779', '594', '690', '691', '692', '693', '602', '603', '604', '747', '748', '973', '147', '148', '149', '872', '873', '459', '460', '225', '613', '614', '361', '362', '478', '615', '974', '975', '712', '713', '627', '628', '624', '625', '983', '633', '634', '635', '976', '977', '978', '984', '985', '986', '987', '988', '989', '990', '991', '992', '993', '994', '995', '996', '997', '998', '999', '1000', '1001', '1002', '1003', '1004', '1005', '1006', '1007', '1008'];


const pokedex = {
    national,
    rgby,
    gsc,
    rse,
    frlg,
    dp,
    pt,
    hgss,
    bw,
    b2w2,
    xy_coastal,
    xy_central,
    xy_mountain,
    oras,
    sm,
    sm_melemele,
    sm_akala,
    sm_ulaula,
    sm_poni,
    usum,
    usum_melemele,
    usum_akala,
    usum_ulaula,
    usum_poni,
    lgpe,
    swsh,
    swsh_armor,
    swsh_crown,
    arceus,
    sv,
};

module.exports = pokedex;